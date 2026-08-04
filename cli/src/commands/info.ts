import { Command } from "commander";
import { getTemplate } from "../services/get-template.js";

export const infoCommand = new Command()
  .name("info")
  .description("Show information about a template")
  .argument("<template>", "Template name")
  .action((templateName: string) => {
    try {
      const template = getTemplate(templateName);
      console.log(`Template: ${templateName}`);
      console.log(`Description: ${template.description}`);
      console.log("Features:");
      template.features.forEach((feature: string) => {
        console.log(`- ${feature}`);
      });
    } catch (error) {
      console.error(error instanceof Error ? error.message : String(error));
      process.exit(1);
    }
  });
