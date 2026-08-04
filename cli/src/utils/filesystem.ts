import fs from "fs";

export function exists(path: string): boolean {
  return fs.existsSync(path);
}

export function getFiles(path: string): string[] {
  return fs.readdirSync(path);
}

export function copyDirectory(source: string, destination: string): void {
  fs.cpSync(source, destination, {
    recursive: true,
  });
}
