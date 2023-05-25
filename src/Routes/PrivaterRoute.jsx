import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivaterRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return <Spinner animation="border" />;
    }
    if (user) {
        return children
    }
    return <Navigate to='/login'></Navigate>;
};

export default PrivaterRoute;