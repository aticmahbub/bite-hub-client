import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../pages/shared/NavBar/NavBar';
import Footer from '../pages/shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <NavBar/>
            <Outlet></Outlet>
            <Footer/>
        </div>
    );
};

export default Main;