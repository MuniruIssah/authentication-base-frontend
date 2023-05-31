import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';
import { LoginFormData, loginSchema } from '../../types/schemas';
import Input from '../input';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
  });
  const onSubmit = (data: LoginFormData) => alert(JSON.stringify(data));

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col gap-3"
    >
      <Input type="email" label="email" {...register('email')} required />
      <p>{errors.email?.message}</p>

      <Input
        type="password"
        label="password"
        {...register('password')}
        required
      />
      <p>{errors.password?.message}</p>
      <div className="text-sm">
        <span className="font-extralight text-gray-600">
          Dont have an account?
        </span>
        {' '}
        <Link to="/register" className="btn-link">
          Register
        </Link>
      </div>
      <input type="submit" className="btn btn-primary" />
    </form>
  );
};

export default LoginForm;
