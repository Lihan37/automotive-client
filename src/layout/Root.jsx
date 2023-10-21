import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Root = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <Outlet></Outlet>
            <div className='flex-grow mt-5'>
            <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;