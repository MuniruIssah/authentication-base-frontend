import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';
import {
  LoginFormData,
  loginSchema,
  RegisterFormData,
  registerSchema,
} from '../../types/schemas';
import Input from '../input';

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = (data: RegisterFormData) => alert(JSON.stringify(data));
  return (
    <form
      className="w-full flex flex-col gap-7"
      onSubmit={handleSubmit(onSubmit)}
    >
      <main className="grid grid-cols-2 gap-6">
        <div>
          <Input
            type="text"
            label="First Name"
            {...register('firstName')}
            required
          />
          <p>{errors.firstName?.message}</p>
        </div>
        <div>
          <Input
            type="text"
            label="Last Name"
            {...register('lastName')}
            required
          />
          <p>{errors.lastName?.message}</p>
        </div>
        <div>
          <Input type="text" label="Other Name" {...register('otherName')} />
          <p>{errors.otherName?.message}</p>
        </div>
        <div>
          <Input type="email" label="email" {...register('email')} required />
          <p>{errors.email?.message}</p>
        </div>
        <div>
          <Input
            type="password"
            label="password"
            {...register('password')}
            required
          />
          <p>{errors.password?.message}</p>
        </div>

        <div>
          <Input
            type="password"
            label="Confirm Password"
            {...register('confirmPassword')}
            required
          />
          <p>{errors.confirmPassword?.message}</p>
        </div>
      </main>
      <div className="">
        <span className="font-extralight text-gray-600">
          Already have an account?
        </span>
        {' '}
        <Link to="/login" className="btn-link">
          Login
        </Link>
      </div>
      <input type="submit" className="btn btn-primary" />
    </form>
  );
};

export default RegisterForm;
