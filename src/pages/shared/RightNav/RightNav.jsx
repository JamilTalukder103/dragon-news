import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithubAlt, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Qzone from '../Qzone/Qzone';

const RightNav = () => {
    return (
        <div >
            <h1>Login with</h1>
            <Button className='mb-1 w-75' variant="outline-primary"> <FaGoogle /> Login with google</Button>
            <Button className='w-75' variant="outline-secondary"><FaGithubAlt /> login with github</Button>
            <div>
                <h2 className='mt-2'>Find us on</h2>
                <div>
                    <ListGroup>
                        <ListGroup.Item className='w-75'><FaFacebook /> Facebook</ListGroup.Item>
                        <ListGroup.Item className='w-75'><FaTwitter />Twitter</ListGroup.Item>
                        <ListGroup.Item className='w-75' ><FaInstagram /> Instragram</ListGroup.Item>
                    </ListGroup>
                </div>
                <Qzone></Qzone>
            </div>
        </div>
    );
};

export default RightNav;