type InputField = {
  kind: "input";
  number: string;
  name: "name" | "email" | "company";
  type: "text" | "email";
  labelKey: string;
  placeholderKey: string;
  autoComplete: string;
  required?: boolean;
};

type TextareaField = {
  kind: "textarea";
  number: string;
  name: "message";
  labelKey: string;
  placeholderKey: string;
  rows: number;
  required?: boolean;
};

export type ContactField = InputField | TextareaField;

export const CONTACT_FIELDS = [
  {
    kind: "input",
    number: "01",
    name: "name",
    type: "text",
    labelKey: "contact.form.name",
    placeholderKey: "contact.form.namePlaceholder",
    autoComplete: "name",
    required: true,
  },
  {
    kind: "input",
    number: "02",
    name: "email",
    type: "email",
    labelKey: "contact.form.email",
    placeholderKey: "contact.form.emailPlaceholder",
    autoComplete: "email",
    required: true,
  },
  {
    kind: "input",
    number: "03",
    name: "company",
    type: "text",
    labelKey: "contact.form.company",
    placeholderKey: "contact.form.companyPlaceholder",
    autoComplete: "organization",
  },
  {
    kind: "textarea",
    number: "04",
    name: "message",
    labelKey: "contact.form.message",
    placeholderKey: "contact.form.messagePlaceholder",
    rows: 5,
    required: true,
  },
] satisfies readonly ContactField[];
