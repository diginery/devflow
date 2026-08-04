#!/usr/bin/env node

import { Command } from "commander";
import { createCommand } from "./commands/create.js";
import { listCommand } from "./commands/list.js";
import { infoCommand } from "./commands/info.js";
import { validateCommand } from "./commands/validate.js";

const program = new Command();

program
  .name("devex")
  .description("DevEx workflow automation CLI")
  .version("1.0.0");

program.addCommand(createCommand);
program.addCommand(listCommand);
program.addCommand(infoCommand);
program.addCommand(validateCommand);

program.parse();
