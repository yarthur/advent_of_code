import { input, declarationForms } from "./testInput.js";
import getDeclarationForms from "../getDeclarationForms.js";

test("returns declaration form answers", () => {
    expect(getDeclarationForms(input)).toEqual(declarationForms);
});
