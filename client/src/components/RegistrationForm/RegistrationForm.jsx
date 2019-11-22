import React, { useState } from 'react';
import useForm from 'react-hook-form';
import onRegistered from '../../actions/onRegistered';

import { Input } from '../CustomComponents/Input';
import { Label, ButtonIn, Div, Err } from './StyleRegistrationForm';

const initialState = {
  firstName: '',
  lastName: '',
  login: '',
  email: '',
  password: '',
  Confirm: ''
};

const RegistrationForm = () => {
  const [state, setState] = useState(initialState);
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = data => {
    setState(data);
    const dataForDispatch = { ...data };
    delete dataForDispatch.Confirm;
    onRegistered(dataForDispatch);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Label>
        FIRST NAME
        <Input
          errors={errors}
          name="firstName"
          ref={register({ required: true, minlength: 3, pattern: /^[a-zA-Z]+$/ })}
          type="text"
          placeholder="Your first name"
        />
        {errors.firstName && <Err>This field is invalid</Err>}
      </Label>
      <Label>
        LAST NAME
        <Input
          errors={errors}
          name="lastName"
          ref={register({ required: true, minlength: 3, pattern: /^[a-zA-Z]+$/ })}
          type="text"
          placeholder="Your last name"
        />
        {errors.lastName && <Err>This field is invalid</Err>}
      </Label>
      <Label>
        LOGIN
        <Input
          errors={errors}
          name="login"
          ref={register({ required: true, minlength: 3, maxlength: 10 })}
          type="text"
          placeholder="Your login"
        />
        {errors.login && <Err>This field is invalid</Err>}
      </Label>
      <Label>
        EMAIL ADRESS
        <Input
          errors={errors}
          name="email"
          ref={register({
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
          })}
          type="email"
          placeholder="Email"
        />
        {errors.email && <Err>This field is invalid</Err>}
      </Label>
      <Label>
        PASSWORD
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
        {errors.password && <Err>This field is invalid</Err>}
      </Label>
      <Input
        errors={errors}
        name="Confirm"
        type="password"
        ref={register({
          required: true,
          minlength: 8,
          validate: value => value === watch('password')
        })}
        placeholder="Confirm password"
      />
      {errors.Confirm && <Err>This field is invalid</Err>}
      <Div>
        <ButtonIn type="submit" content="REGISTER" />
      </Div>
    </form>
  );
};
export default RegistrationForm;
