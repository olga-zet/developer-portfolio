import type { FormEvent } from "react";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { useTranslation } from "react-i18next";

import { CONTACT_FIELDS } from "./ContactFormPanel.data";

import {
  ContactForm,
  Field,
  FieldNumber,
  FormEyebrow,
  FormGrid,
  FormHeading,
  FormNote,
  FormPanel,
  Input,
  Label,
  SubmitButton,
  Textarea,
} from "../ContactSection.styled";

export const ContactFormPanel = () => {
  const { t } = useTranslation();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const contactData = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      message: formData.get("message"),
    };

    console.log(contactData);
  };

  return (
    <FormPanel>
      <FormEyebrow>{t("contact.form.title")}</FormEyebrow>

      <FormHeading>
        <span>{t("contact.form.heading.first")}</span>
        <em>{t("contact.form.heading.second")}</em>
      </FormHeading>

      <ContactForm onSubmit={handleSubmit}>
        <FormGrid>
          {CONTACT_FIELDS.map((field) => {
            const fieldId = `contact-${field.name}`;

            return (
              <Field key={field.name}>
                <Label htmlFor={fieldId}>
                  <FieldNumber>{field.number} —</FieldNumber>

                  {t(field.labelKey)}
                </Label>

                {field.kind === "textarea" ? (
                  <Textarea
                    id={fieldId}
                    name={field.name}
                    placeholder={t(field.placeholderKey)}
                    rows={field.rows}
                    required={field.required}
                  />
                ) : (
                  <Input
                    id={fieldId}
                    name={field.name}
                    type={field.type}
                    placeholder={t(field.placeholderKey)}
                    autoComplete={field.autoComplete}
                    required={field.required}
                  />
                )}
              </Field>
            );
          })}
        </FormGrid>

        <SubmitButton type="submit">
          <span>{t("contact.form.submit")}</span>

          <ArrowRight size={22} aria-hidden="true" />
        </SubmitButton>

        <FormNote>
          <ShieldCheck size={18} strokeWidth={1.7} aria-hidden="true" />

          <span>{t("contact.form.note")}</span>
        </FormNote>
      </ContactForm>
    </FormPanel>
  );
};
