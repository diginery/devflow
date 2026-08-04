import { copyDirectory, exists } from "../utils/filesystem.js";
import { getProjectPath, getTemplatePath } from "../utils/paths.js";

export const createProject = (
  serviceName: string,
  templateName: string,
): void => {
  const templatePath = getTemplatePath(templateName);
  const destinationPath = getProjectPath(serviceName);

  if (!exists(templatePath)) {
    throw new Error(`Template not found: ${templatePath}`);
  }

  if (exists(destinationPath)) {
    throw new Error(`Directory already exists: ${destinationPath}`);
  }

  copyDirectory(templatePath, destinationPath);
};
