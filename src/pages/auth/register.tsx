import AuthenticationGridLayout from '../../layouts/authentication-grid-layout';
import RegisterForm from '../../components/forms/register-form';

const Register = () => (
  <AuthenticationGridLayout>
    <div className="w-full max-w-xl flex flex-col gap-5 p-8">
      <h1 className="text-4xl font-extrabold">Join Us</h1>
      <p className="text-sm font-light">
        Start your journey with us by creating an account below and let us
        enhance your ecommerce experience.
      </p>
      <RegisterForm />
    </div>
  </AuthenticationGridLayout>
);

export default Register;
