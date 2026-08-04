import path from "path";
import { fileURLToPath } from "url";

const filename = fileURLToPath(import.meta.url);
export const dirname = path.dirname(filename);

export function getRepoRoot(): string {
  return path.resolve(dirname, "../../..");
}

export function getTemplatesPath(): string {
  return path.join(getRepoRoot(), "templates");
}

export function getTemplatePath(templateName: string): string {
  return path.join(getTemplatesPath(), templateName);
}

export function getProjectPath(projectName: string): string {
  return path.join(process.cwd(), projectName);
}
