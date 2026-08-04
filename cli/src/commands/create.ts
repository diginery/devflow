import { Command } from "commander";
import { createProject } from "../services/create-project.js";

export const createCommand = new Command()
  .name("create")
  .description("Create a new service from a template")
  .argument("<name>", "Service name")
  .option("-t, --template <template>", "Template type")
  .action((serviceName: string, options: { template: string }) => {
    try {
      if (!options.template) {
        throw new Error(
          "Template type is required. Use -t or --template to specify the template.",
        );
      }
      createProject(serviceName, options.template);
      console.log(`Created successfully.`);
    } catch (error) {
      console.error(error instanceof Error ? error.message : String(error));
      process.exit(1);
    }
  });
