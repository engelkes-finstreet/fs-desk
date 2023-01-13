import Form, { OnSubmitResult } from "ui/form/form";
import { LabeledTextField } from "ui/form/fields/labeled-text-field";
import { z } from "zod";
import { UseFormProps } from "react-hook-form";

interface SignupFormProps<S extends z.ZodType<any, any>> {
  schema?: S;
  onSubmit: (values: z.infer<S>) => Promise<void | OnSubmitResult>;
  initialValues?: UseFormProps<z.infer<S>>["defaultValues"];
}

export function SignupForm<S extends z.ZodType<any, any>>({
  schema,
  onSubmit,
  initialValues,
}: SignupFormProps<S>) {
  return (
    <Form
      submitText="Account erstellen"
      schema={schema}
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      <LabeledTextField name="email" label="Email" placeholder="Email" />
      <LabeledTextField
        name="password"
        label="Passwort"
        placeholder="Passwort"
        type="password"
      />
      <LabeledTextField
        name={"passwordConfirmation"}
        label={"Passwort bestätigen"}
        placeholder={"Passwort bestätigen"}
        type={"password"}
      />
    </Form>
  );
}
