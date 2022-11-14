// @ts-check
import { useState } from 'react';
import { setLocalStorage } from '../../../utils/localstorage.util';
import signInService from '../services/signIn.service';

const useSignInForm = () => {
  const [errors, setErrors] = useState({
    password: '',
    email: '',
  });
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });
  const validEmail = /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/;
  const validPassword = /^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$/;

  const handleOnChange = (e: any) => {
    const { name, value } = e.target;

    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const credentialsAreValid = () => {
    const errors = {
      email: '',
      password: '',
    };

    if (!validEmail.test(credentials.email)) {
      errors.email = 'El email tiene un formato incorrecto';
    }

    if (!validPassword.test(credentials.password)) {
      errors.password =
        'La contraseña es incorrecta (debe ser mayor a 5 caracteres, contener letras y números)';
    }

    setErrors(errors);

    return Object.keys(errors).length > 0;
  };

  const handleOnSubmit = async () => {
    // type Auth = {user: any, accessToken: any}
    // if (!credentialsAreValid()) {
    //   signInService(credentials).then((authentication: Auth) => {
    //     if (authentication) {
    //       setLocalStorage('account', authentication.user);
    //       setLocalStorage('accessToken', authentication.accessToken);
    //     } else {
    //       console.log('ERROR EN LAS CREDENCIALES');
    //     }
    //   });
    // }
  };

  return {
    credentials,
    errors,
    handleOnChange,
    handleOnSubmit,
  };
};

export default useSignInForm;
