import React from 'react';
import { Navigate } from 'react-router-dom';
import SignInForm from '../app/auth/components/SignInForm';
import { useAuth } from '../app/auth/contexts/auth.provider';
import AuthLayout from '../layouts/AuthLayout';

const SignInPage = () => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to='/' />;
  }

  return (
    <AuthLayout>
      <SignInForm />
    </AuthLayout>
  );
};

export default SignInPage;
