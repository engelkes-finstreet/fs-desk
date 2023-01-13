import Form, { OnSubmitResult } from "ui/form/form";
import { LabeledTextField } from "ui/form/fields/labeled-text-field";
import { z } from "zod";
import { UseFormProps } from "react-hook-form";

interface LoginFormProps<S extends z.ZodType<any, any>> {
  schema?: S;
  onSubmit: (values: z.infer<S>) => Promise<void | OnSubmitResult>;
  initialValues?: UseFormProps<z.infer<S>>["defaultValues"];
}

export function LoginForm<S extends z.ZodType<any, any>>({
  schema,
  onSubmit,
  initialValues,
}: LoginFormProps<S>) {
  return (
    <Form
      submitText="Login"
      schema={schema}
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      <LabeledTextField
        name={"email"}
        label={"E-Mail"}
        placeholder={"E-Mail"}
      />
      <LabeledTextField
        name={"password"}
        label={"Passwort"}
        placeholder={"Passwort"}
        type={"password"}
      />
    </Form>
  );
}
