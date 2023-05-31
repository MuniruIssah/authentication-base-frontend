import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  LoginFormData,
  ResetPasswordFormData,
  resetPasswordSchema,
} from '../../types/schemas';
import Input from '../input';

const ResetPasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordFormData>({
    resolver: yupResolver(resetPasswordSchema),
  });

  const onSubmit = (data: LoginFormData) => alert(JSON.stringify(data));
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col gap-3"
    >
      <Input
        type="password"
        label="password"
        {...register('password')}
        required
      />
      <p>{errors.password?.message}</p>

      <Input
        type="password"
        label="confirm Password"
        {...register('confirmPassword')}
        required
      />
      <p>{errors.confirmPassword?.message}</p>

      <input type="submit" className="btn btn-primary" />
    </form>
  );
};

export default ResetPasswordForm;
