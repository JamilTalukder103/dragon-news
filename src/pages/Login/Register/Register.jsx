import React from 'react';
import { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Form, Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import { useState } from 'react';

const Register = () => {
    const { createUser } = useContext(AuthContext)
    const [accepted, setAccepted] = useState(false);
    const handelChexkBox = (e) => {
        setAccepted(e.target.checked)
    }
    const handelRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        form.reset();
        console.log(name, photo, email, password)
        createUser(email, password)
            .then(result => {
                const createUser = result.user;
                console.log(createUser)
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    return (
        <Container className='w-50 mx-auto'>
            <form onSubmit={handelRegister}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" name="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                </div>
                <div className="mb-3">
                    <label className="form-label">Photo</label>
                    <input type="text" name="photo" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                </div>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" name='email' required className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" name='password' required className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check">
                    <input onClick={handelChexkBox} type="checkbox" name='accept' className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" >Accept terms and condition</label>
                </div>
                <button type="submit" disabled={!accepted} className="btn btn-primary">Register</button>
                <div className="form-text">
                    You have alreday account? please  <Link to='/login'>Login</Link>
                </div>
            </form>
        </Container>
    );
};

export default Register;