// jest.config.js
import { defaults } from "jest-config";

export default {
    moduleFileExtensions: [
        ...defaults.moduleFileExtensions,
        "mjs",
        "ts",
        "tsx",
    ],
    testPathIgnorePatterns: [
        ...defaults.testPathIgnorePatterns,
        "sampleData.mjs",
    ],
    testRegex: "(__tests__/.*(test|spec))\\.m?jsx?$",
    transform: {
        "^.+\\.m?jsx?$": "babel-jest",
    },
};
