import { object, ref, string } from "yup";

export const registerSchema = object({
  email: string()
    .required("O campo e-mail não pode ficar vazio")
    .email("Insira um e-mail válido"),
  password: string()
    .required("O campo senha não pode ficar vazio")
    .min(8, "A senha deve ter minimo 8 caracteres"),
  repeatPassword: string()
    .required("O campo repetir senha não pode ficar vazio")
    .oneOf([ref("password")], "As senhas devem ser iguais"),
});
