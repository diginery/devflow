import { Template } from "../types/template.js";
import { templates } from "../config/templates.js";

export const getTemplate = (templateName: string): Template => {
  const template = templates[templateName as keyof typeof templates];
  if (!template) {
    throw new Error(`Template not found: ${templateName}`);
  }
  return template;
};
