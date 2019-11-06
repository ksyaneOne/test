import React, {useEffect, useState, useRef} from 'react';
import {Button, Checkbox, Form} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import {setCookie} from '../../utils/setCookies';
import {apiService} from '../../services/api/apiService';


export default function LoginForm () {
    const initialState = {
        login: '',
        password: '',
        isRemember: false,
    };

    const [state, setState] = useState(initialState);
    const inputLoginRef = useRef(null);
    const inputPasswordRef = useRef(null);
    const checkBoxRemember = useRef(null);
    const {login, password} = state;

    useEffect(() => {
        if (checkBoxRemember.current.state.checked) {
            setCookie('login', login.toString(), {expires: 1});
            setCookie('password', password.toString(), {expires: 1});
        }
    }, [login, password]);

    const onAuth = () => {
        setState({...state, login: inputLoginRef.current.value, password: inputPasswordRef.current.value});

        apiService()({
            method: 'post',
            url: '/customers/login',
            data: {
                loginOrEmail: inputLoginRef.current.value,
                password: +inputPasswordRef.current.value
            }.then(loginResult => {
                /*Do something with jwt-token if login successed*/
            })
                .catch(err => {
                    /*Show error to customer, may be incorrect password or something else*/
                })
        })
    };

    return (

        <Form onSubmit={onAuth} className='input-form'>
            <Form.Field>
                <label>Login:</label>
                <input ref={inputLoginRef} placeholder='Login'/>
            </Form.Field>
            <Form.Field>
                <label>Password:</label>
                <input ref={inputPasswordRef} placeholder='Password'/>
            </Form.Field>
            <Form.Field>
                <Checkbox ref={checkBoxRemember} label='Remember me'/>
            </Form.Field>
            <Button color={'olive'} type='submit'>Sign In</Button>
        </Form>

    );
}

