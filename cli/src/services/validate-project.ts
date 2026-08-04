import path from "path";
import { exists } from "../utils/filesystem.js";
import { ValidationRules } from "../types/template.js";

export function validateProject(
  projectPath: string,
  rules: ValidationRules,
): boolean {
  let valid = true;

  console.log(`Validating ${projectPath}\n`);

  rules.files.forEach((file) => {
    if (exists(path.join(projectPath, file))) {
      console.log(`✔ ${file}`);
    } else {
      console.log(`✖ ${file}`);
      valid = false;
    }
  });

  rules.folders.forEach((folder) => {
    if (exists(path.join(projectPath, folder))) {
      console.log(`✔ ${folder}`);
    } else {
      console.log(`✖ ${folder}`);
      valid = false;
    }
  });

  return valid;
}
