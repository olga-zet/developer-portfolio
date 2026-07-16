import { ArrowRight, CircleAlert, ShieldCheck } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";
import { useTranslation } from "react-i18next";

import { CONTACT_FIELDS } from "./ContactFormPanel.data";

import {
  ContactForm,
  Field,
  FieldError,
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

const formId = import.meta.env.VITE_FORMSPREE_FORM_ID;

export const ContactFormPanel = () => {
  const { t } = useTranslation();

  const [state, handleSubmit, reset] = useForm(formId);

  if (!formId) {
    return (
      <FormPanel>
        <FormEyebrow>{t("contact.form.errorTitle")}</FormEyebrow>

        <FormNote role="alert">
          <CircleAlert size={18} strokeWidth={1.7} aria-hidden="true" />

          <span>{t("contact.form.configurationError")}</span>
        </FormNote>
      </FormPanel>
    );
  }

  if (state.succeeded) {
    return (
      <FormPanel>
        <FormEyebrow>{t("contact.form.successEyebrow")}</FormEyebrow>

        <FormHeading>
          <span>{t("contact.form.successHeading.first")}</span>
          <em>{t("contact.form.successHeading.second")}</em>
        </FormHeading>

        <FormNote role="status">
          <ShieldCheck size={18} strokeWidth={1.7} aria-hidden="true" />

          <span>{t("contact.form.successMessage")}</span>
        </FormNote>

        <SubmitButton type="button" onClick={reset}>
          <span>{t("contact.form.sendAnother")}</span>

          <ArrowRight size={22} aria-hidden="true" />
        </SubmitButton>
      </FormPanel>
    );
  }

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

                <FieldError>
                  <ValidationError
                    field={field.name}
                    prefix={t(field.labelKey)}
                    errors={state.errors}
                  />
                </FieldError>
              </Field>
            );
          })}
        </FormGrid>

        <SubmitButton type="submit" disabled={state.submitting}>
          <span>
            {state.submitting
              ? t("contact.form.submitting")
              : t("contact.form.submit")}
          </span>

          <ArrowRight size={22} aria-hidden="true" />
        </SubmitButton>

        {state.errors ? (
          <FormNote role="alert">
            <CircleAlert size={18} strokeWidth={1.7} aria-hidden="true" />

            <ValidationError
              errors={state.errors}
              prefix={t("contact.form.errorPrefix")}
            />
          </FormNote>
        ) : (
          <FormNote>
            <ShieldCheck size={18} strokeWidth={1.7} aria-hidden="true" />

            <span>{t("contact.form.note")}</span>
          </FormNote>
        )}
      </ContactForm>
    </FormPanel>
  );
};
