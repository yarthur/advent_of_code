import { promises as fsPromises } from "fs";
import getInput from "./getInput.js";

const readdir = fsPromises.readdir;

/**
 * TODO: when jest works a bit better, this would allow for a more stable implementation.
 * Instead of assuming the script is being triggered at project root, it would allow us to account for the location of the script itself (`__dirname` in CJS).
 *
 * For now, only "execute" this script from the project root.
 */
// import { dirname } from "path";
// import { fileURLToPath } from "url";

// const __dirname = dirname(fileURLToPath(import.meta.url));
// const projectRoot = `${__dirname}/..`;

const projectRoot = process.cwd();

const fetchPuzzles = async (year, day) => {
    const solutionsPath = `${projectRoot}/solutions`;

    if (year === undefined) {
        const years = await readdir(solutionsPath, {
            withFileTypes: true,
        });

        return years.reduce(async (puzzles, dirEnt) => {
            let newPuzzles = [];

            if (dirEnt.isDirectory() === true) {
                newPuzzles = await fetchPuzzles(dirEnt.name);
            }

            return [...(await puzzles), ...newPuzzles];
        }, []);
    }

    if (day === undefined) {
        const days = await readdir(`${solutionsPath}/${year}`, {
            withFileTypes: true,
        });

        return await days.reduce(async (puzzles, dirEnt) => {
            if (dirEnt.isDirectory() === true) {
                (await puzzles).push(
                    ...(await fetchPuzzles(year, dirEnt.name))
                );
            }

            return puzzles;
            // return [...(await puzzles), ...newPuzzles];
        }, []);
    }

    const { part1, part2 } = await import(
        `${solutionsPath}/${year}/${day}/index.js`
    );

    const input = await getInput([year, day]);

    return [[year, day, part1, part2, input]];
};

const [year, day] = process.argv.slice(2);

fetchPuzzles(year, day).then((puzzles) => {
    puzzles.forEach(([year, day, part1, part2, input]) => {
        if (part1 !== undefined) {
            console.log(`${year} day ${day}, part1: ${part1(input)}`);
        }

        if (part2 !== undefined) {
            console.log(`${year} day ${day}, part2: ${part2(input)}`);
        }
    });
});
