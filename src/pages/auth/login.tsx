import React from 'react';
import AuthenticationCenterLayout from '../../layouts/authentication-center-layout';
import LoginForm from '../../components/forms/login-form';

const Login = () => (
  <AuthenticationCenterLayout>
    <h1 className="text-3xl font-extrabold">Sign In</h1>
    <p className="text-sm font-light">
      Welcome back, resume your wonderful journey with us
    </p>
    <LoginForm />
  </AuthenticationCenterLayout>
);

export default Login;
