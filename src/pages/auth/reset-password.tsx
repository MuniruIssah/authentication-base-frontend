import AuthenticationCenterLayout from '../../layouts/authentication-center-layout';
import ResetPasswordForm from '../../components/forms/reset-password-form';

const ResetPassword = () => (
  <AuthenticationCenterLayout>
    <h1 className="text-3xl font-extrabold">Reset Password</h1>
    <p className="text-sm font-light">Enter you new password</p>
    <ResetPasswordForm />
  </AuthenticationCenterLayout>
);

export default ResetPassword;
