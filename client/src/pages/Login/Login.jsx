import React, { useState } from 'react';
import LoginForm from '../../components/LoginForm';
import { Div, LoginBtn, RegistrationBtn, WrapperBtn, WrapperForm } from './StyleLogin';
import RegistrationForm from '../../components/RegistrationForm';

const LogIn = () => {
  const [state, setState] = useState({ isLoginForm: true });
  const { isLoginForm } = state;

  const handleBtn = event => {
    event.preventDefault();
    if (event.target.getAttribute('data-name') === 'login') {
      setState({ ...state, isLoginForm: true });
    } else {
      setState({ ...state, isLoginForm: false });
    }
  };

  return (
    <Div>
      <WrapperForm>
        <WrapperBtn>
          <LoginBtn data-name="login" isLoginForm={isLoginForm} onClick={handleBtn}>
            Login
          </LoginBtn>
          <RegistrationBtn isLoginForm={isLoginForm} onClick={handleBtn}>
            Registration
          </RegistrationBtn>
        </WrapperBtn>
        {isLoginForm ? <LoginForm /> : <RegistrationForm />}
      </WrapperForm>
    </Div>
  );
};

export default LogIn;
