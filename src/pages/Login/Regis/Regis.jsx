import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Form, Link } from 'react-router-dom';

const Regis = () => {
    return (
        <div>
            <Container>
                <Form className='w-50 mx-auto'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
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
        </div>
    );
};

export default Regis;