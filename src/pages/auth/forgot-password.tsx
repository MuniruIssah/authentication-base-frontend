import AuthenticationCenterLayout from '../../layouts/authentication-center-layout';
import ForgotPasswordForm from '../../components/forms/forgot-password-form';

const ForgotPassword = () => (
  <AuthenticationCenterLayout>
    <h1 className="text-3xl font-extrabold">Forgot Password</h1>
    <p className="text-sm font-light">
      Please provide the email for your account
    </p>
    <ForgotPasswordForm />
  </AuthenticationCenterLayout>
);

export default ForgotPassword;
