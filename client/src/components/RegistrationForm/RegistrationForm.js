import React, { useState } from "react";
import useForm from "react-hook-form";
import onRegistered from "../../actions/onRegistered";

import { Input } from "../CustomComponents/Input";
import { Label, ButtonIn, Div, Err } from "./StyleRegistrationForm";

const initialState = {
  userData: {
    firstName: "",
    lastName: "",
    login: "",
    email: "",
    password: "",
  },
  Confirm: "",
  error: null,
};

const RegistrationForm = () => {
  const [state, setState] = useState(initialState);
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = async data => {
    setState(data);
    const dataForDispatch = { ...state.userData, ...data };
    delete dataForDispatch.Confirm;
    await onRegistered(dataForDispatch).then(err => {
      setState({ ...state, error: err });
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Label>
        FIRST NAME
        <Input
          errors={errors}
          name="firstName"
          ref={register({
            required: true,
            minlength: 3,
            pattern: /^[a-zA-Zа-яА-Я]+$/,
          })}
          type="text"
          placeholder="Your first name"
        />
        <Err error={errors.firstName}>
          First Name is a-z, A-Z, а-я, А-Я between 2 and 25 characters
        </Err>
      </Label>
      <Label>
        LAST NAME
        <Input
          errors={errors}
          name="lastName"
          ref={register({
            required: true,
            minlength: 3,
            pattern: /^[a-zA-Z]+$/,
          })}
          type="text"
          placeholder="Your last name"
        />
        <Err error={errors.lastName}>
          Last Name is a-z, A-Z, а-я, А-Я, between 2 and 25 characters
        </Err>
      </Label>
      <Label>
        LOGIN
        <Input
          errors={errors}
          name="login"
          ref={register({
            required: true,
            pattern: /^[a-zA-Z0-9]+$/,
            minlength: 3,
            maxlength: 10,
          })}
          type="text"
          placeholder="Your login"
        />
        <Err error={errors.login}>
          Login must be between 3 and 10 characters
        </Err>
      </Label>
      <Label>
        EMAIL ADRESS
        <Input
          errors={errors}
          name="email"
          ref={register({
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
          })}
          type="email"
          placeholder="Email"
        />
        <Err error={errors.email}>This field is invalid</Err>
      </Label>
      <Label>
        PASSWORD
        <Input
          errors={errors}
          name="password"
          ref={register({
            required: true,
            pattern: /^[a-zA-Z0-9]+$/,
            minlength: 8,
            maxlength: 30,
          })}
          type="password"
          placeholder="Password"
        />
        <Err error={errors.password}>
          Allowed characters for password is a-z, A-Z, 0-9, between 7 and 30
          characters
        </Err>
      </Label>
      <Input
        errors={errors}
        name="Confirm"
        type="password"
        ref={register({
          required: true,
          minlength: 8,
          validate: value => value === watch("password"),
        })}
        placeholder="Confirm password"
      />
      <Err error={errors.Confirm}>
        Allowed characters for password is a-z, A-Z, 0-9, between 7 and 30
        characters
      </Err>
      {state.error && <Err error>This user is already exists.</Err>}
      <Div>
        <ButtonIn type="submit" content="REGISTER" />
      </Div>
    </form>
  );
};
export default RegistrationForm;
