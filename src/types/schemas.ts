import * as yup from 'yup';

export const loginSchema = yup
  .object({
    email: yup.string().required(),
    password: yup.string().required(),
  })
  .required();

export const forgotPasswordSchema = yup
  .object({
    email: yup.string().required(),
  })
  .required();

export type LoginFormData = yup.InferType<typeof loginSchema>;
export type ForgotPasswordFormData = yup.InferType<typeof forgotPasswordSchema>;
