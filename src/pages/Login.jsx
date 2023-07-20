import React, { useContext } from 'react'
import Form from 'react-bootstrap/Form';
import { useAuthContext } from '../context/LoginProvider';
export default function Login() {
    const { handleSignup, handleLogin } = useAuthContext();
    return (
        <div>
            <Form>

                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
            </Form>
        </div>
    )
}
