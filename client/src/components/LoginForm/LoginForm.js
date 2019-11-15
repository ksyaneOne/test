import React, { useEffect, useState, useRef } from 'react';
import { Button, Checkbox } from 'semantic-ui-react';

import Input from '../CustomComponents/Input';

import { setCookie } from '../../utils/setCookies';

import { Form, Div, Label, Span } from './StyleLoginForm';

const LoginForm = () => {
  const initialState = {
    login: 'qwdwqd',
    password: 'wqdqwd',
    isRemember: false
  };
  const [state, setState] = useState(initialState);
  const inputLoginRef = useRef(null);
  const inputPasswordRef = useRef(null);
  const checkBoxRemember = useRef(null);
  const { login, password, isRemember } = state;
  useEffect(() => {});

  const onAuth = e => {
    e.preventDefault();
    console.log(inputLoginRef);
    // setState({...state,login })
  };

  return (
    <Div>
      <Form onSubmit={onAuth}>
        <Input ref={inputLoginRef} type="text" placeholder="E-mail" />
        <Input ref={inputPasswordRef} type="password" placeholder="Password" />
        <Label>
          <Checkbox ref={checkBoxRemember} id="check" />
          <Span>Keep me signed in</Span>
        </Label>
        <Button type="submit" color="white" content="LOG IN" />
      </Form>
    </Div>
  );
};
export default LoginForm;
