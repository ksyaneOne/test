import React, {useState, useRef} from 'react';
import {Button, Checkbox} from 'semantic-ui-react';
import useForm from 'react-hook-form';
import onRegistered from '../../actions/onAuthorization';


import {Input} from '../CustomComponents/Input';


import {Form, Div, Label, Span,Err} from './StyleLoginForm';

const LoginForm = () => {
  const {register, handleSubmit, errors} = useForm();
  const checkBoxRemember = useRef(null);

  const initialState = {
    login: '',
    password: '',
    isRemember: false,
    error : false
  };
  const [state, setState] = useState(initialState);


 const { error } = state;

  const onAuth = data => {
    setState(data);

    const dataForDispatch = {...data};
    delete dataForDispatch.isRemember;
    onRegistered(dataForDispatch);
  };

  return (
    <Div>
      <Form onSubmit={handleSubmit(onAuth)}>
        <Input
          errors={errors}
          name="loginOrEmail"
          ref={register({
            required: true, minlength: 3,
            minlength: 3,
            pattern: /^(?=[a-z0-9.]{3,20}$)[a-z0-9]+\.?[a-z0-9]+$|^.*@\w+\.[\w.]+$/i
          })}
          type="text"
          placeholder="Login or Email"
        />
       <Err error={errors.loginOrEmail}>This field is invalid</Err>
        <Input
          errors={errors}
          name="password"
          ref={register({
            required: true,
            minlength: 8
          })}
          type="password"
          placeholder="Password"
        />
        <Err error={errors.password}>This field is invalid</Err>
        <Label>
          <Checkbox ref={checkBoxRemember} id="check" />
          <Span>Keep me signed in</Span>
        </Label>
        <Button type="submit" content="LOG IN" />
      </Form>
    </Div>
  );
};
export default LoginForm;
