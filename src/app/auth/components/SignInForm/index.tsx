import { Link } from 'react-router-dom';
import React from 'react';
import FeatherIcon from 'feather-icons-react';
import InputGroupIcon from '../../../../components/inputs/InputGroupIcon';
import useSignInForm from '../../hooks/useSignInForm';
import Button from '../../../../components/inputs/Button';
import { Typography } from '../../../../components/data-display';
import Form from './styled';

const SignInForm = () => {
  const { credentials, handleOnChange, errors, handleOnSubmit } =
    useSignInForm();

  return (
    <Form.Wrapper
      onSubmit={e => {
        e.preventDefault();
        handleOnSubmit();
      }}
    >
      <Typography as='h3' className='mb-4'>
        Login
      </Typography>

      <Form.Avatar
        src='https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y'
        alt=''
        className='mb-4'
      />

      <Typography as='small' className='text-center mb-4'>
        Credenciales: <b>user@firm.app</b> / contraseña: <b>contra123</b>
      </Typography>

      {/* <InputGroupIcon
        labelText="Email"
        helperText={errors.email}
        isInvalid={!!errors.email}
        icon={<FeatherIcon icon="user" size="16" />}
        value={credentials.email}
        id="email"
        name="email"
        type="email"
        onChange={handleOnChange}
      />
      <InputGroupIcon
        labelText="Contraseña"
        helperText={errors.password}
        isInvalid={!!errors.password}
        icon={<FeatherIcon icon="unlock" size="16" />}
        value={credentials.password}
        id="password"
        name="password"
        type="password"
        onChange={handleOnChange}
      />
      <div className="text-end w-100 mb-4">
        <Link to="">Recuperar contraseña?</Link>
      </div>

      <Button
        color="success"
        variant="contained"
        className="rounded-pill w-100"
        type="submit"
      >
        Enviar
      </Button> */}
    </Form.Wrapper>
  );
};

export default SignInForm;
