import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  ForgotPasswordFormData,
  forgotPasswordSchema,
} from '../../types/schemas';
import Input from '../input';

const ForgotPasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormData>({
    resolver: yupResolver(forgotPasswordSchema),
  });
  const onSubmit = (data: ForgotPasswordFormData) => alert(JSON.stringify(data));
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col gap-3"
    >
      <Input type="email" label="email" {...register('email')} required />
      <p>{errors.email?.message}</p>
      <input type="submit" className="btn btn-primary" />
    </form>
  );
};

export default ForgotPasswordForm;
