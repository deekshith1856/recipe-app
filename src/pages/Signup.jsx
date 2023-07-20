import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useAuthContext } from '../context/LoginProvider';
export default function Signup() {
    const { handleSignup, handleLogin } = useAuthContext();

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleName = (e) => {
        setName(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handleSubmit = (e) => {
        const cred = {
            name,
            email,
            password
        }
        handleSignup(cred)
    }
    return (
        <div>

            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formGroupName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name" placeholder="Enter name" name='' required onChange={handleName} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required onChange={handleEmail} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required onChange={handlePassword} />
                </Form.Group>
                <Button type='submit'>Signup</Button>
            </Form>
        </div>
    )
}
