import React, { useState } from 'react';
import {
    Form,
    Button
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import axios from 'axios';

import './styles.css';

async function userLogin(credentials) {
    return axios({
        method: 'POST',
        url: 'http://localhost:3001/login',
        headers: {
            'Content-Type': 'application.json'
        },
        data: JSON.stringify(credentials)
    })
    .then(function(response) {
        console.log(response);
    })
    .catch(function (error) {
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (error.request) {
            console.log(error.request);
        } else {
            console.log('Error', error.message);
        }
        console.log(error.config);
    })
}

function Login({ setToken }) {
    const [userName, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await userLogin({
            userName,
            password
        });
        setToken(token);
    }

    return (
        <div className="login-wrapper">
            <h2>Login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" onChange={e => setUserName(e.target.value)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" onChange={e => setPassword(e.target.value)} />
                </Form.Group>    
                <Form.Group>
                    <Button type="submit">
                        Submit
                    </Button>
                </Form.Group>        
            </Form>
        </div>
    );
}

export default Login;

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}