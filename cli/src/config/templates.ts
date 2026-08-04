export const templates = {
  "node-api": {
    description: "Node.js API service template",
    features: [
      "TypeScript",
      "Express",
      "ESLint",
      "Prettier",
      "Vitest",
      "Docker",
      "Dev Container",
      "GitHub Actions",
    ],
    validation: {
      files: ["package.json", "tsconfig.json", "Dockerfile"],
      folders: ["src", ".github/workflows"],
    },
  },
};
