import { Command } from "commander";
import { validateProject } from "../services/validate-project.js";
import { getProjectPath } from "../utils/paths.js";
import { getTemplate } from "../services/get-template.js";

export const validateCommand = new Command()
  .name("validate")
  .description("Check if project follows DevEx standards")
  .argument("<path>", "Project path")
  .option("-t, --template <template>", "Template type")
  .action((projectPath: string, options: { template: string }) => {
    try {
      if (!options.template) {
        throw new Error(
          "Template type is required. Use -t or --template to specify the template.",
        );
      }

      const template = getTemplate(options.template);

      const valid = validateProject(
        getProjectPath(projectPath),
        template.validation,
      );

      if (!valid) {
        throw new Error(
          "\nProject validation failed. Some required files or folders are missing.",
        );
      }

      console.log(
        "\nProject validation successful. All required files and folders are present.",
      );
    } catch (error) {
      console.error(error instanceof Error ? error.message : String(error));
      process.exit(1);
    }
  });
