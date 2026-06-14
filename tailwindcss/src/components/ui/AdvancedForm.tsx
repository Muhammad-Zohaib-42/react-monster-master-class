import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm, type SubmitHandler } from "react-hook-form";

interface FormData {
  username: string;
  email: string;
  password: string;
}

const AdvancedForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <main>
      <section className="h-screen grid place-content-center">
        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-bold">Register</h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-3 min-w-[300px] border rounded p-4"
          >
            <Field>
              <FieldLabel htmlFor="input-field-username">Username</FieldLabel>
              <Input
                id="input-field-username"
                type="text"
                placeholder="Enter your username"
                {...register("username", { required: "Username is required" })}
              />
              {errors.username && (
                <FieldDescription className="text-red-500">
                  {errors.username.message}
                </FieldDescription>
              )}
            </Field>

            <Field>
              <FieldLabel htmlFor="input-field-email">Email</FieldLabel>
              <Input
                id="input-field-email"
                type="email"
                placeholder="Enter your email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <FieldDescription className="text-red-500">
                  {errors.email.message}
                </FieldDescription>
              )}
            </Field>

            <Field>
              <FieldLabel htmlFor="input-field-password">Password</FieldLabel>
              <Input
                id="input-field-password"
                type="password"
                placeholder="Enter your password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "password must be atleat 8 character long",
                  },
                })}
              />
              {errors.password && (
                <FieldDescription className="text-red-500">
                  {errors.password.message}
                </FieldDescription>
              )}
            </Field>

            <Button className="cursor-pointer" disabled={isSubmitting}>
              {isSubmitting ? "Registering..." : "Register"}
            </Button>
          </form>
          <p className="text-sm text-gray-800">
            already have an account!{" "}
            <a className="text-blue-500 underline" href="#">
              Login
            </a>
          </p>
        </div>
      </section>
    </main>
  );
};

export default AdvancedForm;
