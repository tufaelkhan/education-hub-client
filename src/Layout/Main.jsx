import React from 'react';
import NavBar from '../Components/Shared/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Shared/Footer';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;