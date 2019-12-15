import React from 'react';
import styled from '@emotion/styled';
import LoginForm from '../../components/LoginForm';

const Div = styled.div`
height:100vh;
display: flex;
  align-items: center;
  justify-content: center;
  
`;


export default function Login() {
  return (
    <Div>
      <LoginForm />
    </Div>
  );
}
