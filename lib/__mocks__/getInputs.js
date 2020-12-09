import { readFileSync } from "fs";

/**
 * TODO: when jest works a bit better, this would allow for a more stable implementation.
 * Instead of assuming the script is being triggered at project root, it would allow us to account for the location of the script itself (`__dirname` in CJS).
 */
// import { dirname, resolve } from "path";
// import { fileURLToPath } from "url";
// const __dirname = dirname(fileURLToPath(import.meta.url));
// const projectRoot = `${__dirname}/..`;

const projectRoot = ".";

export default function (path) {
    const filePath = `${projectRoot}/${path.join("/")}/__mocks__/inputs.txt`;

    return readFileSync(filePath, "utf8").trim();
}
