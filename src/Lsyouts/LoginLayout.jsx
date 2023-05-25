import React from 'react';
import DragonNavBar from '../pages/shared/DragonNavBar/DragonNavBar';
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
    return (
        <div>
            <DragonNavBar></DragonNavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginLayout;