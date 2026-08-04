import { Command } from "commander";
import { templates } from "../config/templates.js";

export const listCommand = new Command()
  .name("list")
  .description("Show available templates")
  .action(() => {
    console.log("Available templates:");
    Object.keys(templates).forEach((templateName) => {
      console.log(`- ${templateName}`);
    });
  });
