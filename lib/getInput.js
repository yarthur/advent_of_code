import { promises as fsPromises } from "fs";

const readFile = fsPromises.readFile;

/**
 * TODO: when jest works a bit better, this would allow for a more stable implementation.
 * Instead of assuming the script is being triggered at project root, it would allow us to account for the location of the script itself (`__dirname` in CJS).
 */
// import { fileURLToPath } from "url";

// const __dirname = dirname(fileURLToPath(import.meta.url));
// const projectRoot = `${__dirname}/..`;

const projectRoot = ".";

export default async (path) => {
    const filePath = `${projectRoot}/solutions/${path.join("/")}/input.txt`;

    const fileContents = await readFile(filePath, "utf8");

    return fileContents.trim();
};
