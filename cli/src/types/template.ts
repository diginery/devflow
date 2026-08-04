export type Template = {
  description: string;
  features: string[];
  validation: ValidationRules;
};

export type ValidationRules = {
  files: string[];
  folders: string[];
};
