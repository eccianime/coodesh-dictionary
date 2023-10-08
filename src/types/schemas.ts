import { object, ref, string } from "yup";

export const registerSchema = object({
  email: string()
    .required("The e-mail field can't be empty")
    .email("Insert a valid e-mail"),
  password: string()
    .required("The password field can't be empty")
    .min(8, "The password must have at least 8 characters"),
  repeatPassword: string()
    .required("The repeat password field can't be empty")
    .min(8, "The password must have at least 8 characters")
    .oneOf([ref("password")], "The passwords must match"),
});
