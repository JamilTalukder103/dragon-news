import React from 'react';
import { useContext } from 'react';
import { Button, Container, Form, Spinner } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';

const Login = () => {
    const { signInUser, loading } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/category/0'


    const handelLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signInUser(email, password)
            .then(result => {
                const usr = result.user;
                navigate(from)
                console.log(usr)
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    return (
        <Container>
            <Form onSubmit={handelLogin} className='w-50 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <br />
                <Form.Text className="text-muted">
                    Don't have an account?<Link to='/register'>Register</Link>
                </Form.Text>
                <Form.Text className="text-muted">

                </Form.Text>
                <Form.Text className="text-muted">

                </Form.Text>
            </Form>
        </Container>
    );
};

export default Login;