
import React, { useEffect, useState, useRef } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import { setCookie } from '../../utils/setCookies';
// import {apiService} from '../../services/api/apiService';

export default function LoginForm() {
  const initialState = {
    login: '',
    password: '',
    isRemember: false,
  };

  const [state, setState] = useState(initialState);
  const inputLoginRef = useRef(null);
  const inputPasswordRef = useRef(null);
  const checkBoxRemember = useRef(null);
  const { login, password } = state;

  useEffect(() => {
    if (checkBoxRemember.current.state.checked) {
      setCookie('login', login.toString(), { expires: 1 });
      setCookie('password', password.toString(), { expires: 1 });
    }
  }, [login, password]);

  const onAuth = () => {
    setState({ ...state, login: inputLoginRef.current.value, password: inputPasswordRef.current.value });

    // apiService()({
    //     method: 'post',
    //     url: '/customers/login',
    //     data: {
    //         loginOrEmail: inputLoginRef.current.value,
    //         password: +inputPasswordRef.current.value
    //     }.then(loginResult => {
    //     })
    //         .catch(err => {
    //         })
    // })
  };

<<<<<<< HEAD
    return (
      <Div>
        <Form onSubmit={handleSubmit(onAuth)}>
          <Input
            errors={errors}
            name="loginOrEmail"
            ref={register({
                        required: true, minlength: 3,
                        pattern: /^(?=[a-z0-9.]{3,20}$)[a-z0-9]+\.?[a-z0-9]+$|^.*@\w+\.[\w.]+$/i
                    })}
            type="text"
            placeholder="Login or Email"
          />
          {errors.loginOrEmail && <Err>This field is invalid</Err>}
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
=======
  return (

    <Form onSubmit={onAuth} className="input-form">
      <Form.Field>
        <label>Login:</label>
        <input ref={inputLoginRef} placeholder="Login" />
      </Form.Field>
      <Form.Field>
        <label>Password:</label>
        <input ref={inputPasswordRef} placeholder="Password" />
      </Form.Field>
      <Form.Field>
        <Checkbox ref={checkBoxRemember} label="Remember me" />
      </Form.Field>
      <Button color="olive" type="submit">Sign In</Button>
    </Form>

  );
}




          
>>>>>>> redux
