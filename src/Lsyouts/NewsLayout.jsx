import React from 'react';
import Header from '../pages/shared/Header/Header';
import Footer from '../pages/shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../pages/shared/LeftNav/LeftNav';
import RightNav from '../pages/shared/RightNav/RightNav';
import { Outlet } from 'react-router-dom';

const NewsLayout = () => {
    return (
        <div>
            <div>
                <Header></Header>
                <Container>
                    <Row>
                        <Col lg={9}>
                            <Outlet />
                        </Col>
                        <Col lg={3}>
                            <RightNav></RightNav>
                        </Col>
                    </Row>
                </Container>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default NewsLayout;