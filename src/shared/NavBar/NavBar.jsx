import React, { useContext } from 'react';
import logo from '../../assets/logo.png';
import { Link, NavLink } from 'react-router-dom';
import Login from '../../Home/SignUp/Login';
import { AuthContext } from '../../Home/AuthProvider';

const NavBar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () =>{
        logOut()
        .then()
        .catch()
    }


    const navLinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/addProduct'>Add Product</NavLink></li>
        <li><NavLink to='/myCart'>My Cart</NavLink></li>
        <li><NavLink to='/register'>Sign Up</NavLink></li>


    </>
    return (
        <div className="navbar bg-base-100 mb-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <div className='relative'>
                    <figure className='w-[200px] h-[200px]'> <img className='relative' src={logo} alt="" /></figure>
                    <h2 className='absolute bottom-14 text-2xl left-10'>PowerGlide</h2>
                </div>


            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {user ? (
                    <div className="flex items-center">
                        <img src={user.photoURL} alt="User Photo" className="w-8 h-8 rounded-full mr-2" />
                        <span>{user.email}</span>
                        <button onClick={handleSignOut} className='btn'>Sign Out</button>
                    </div>
                ) : (
                    <Link to='/login'>
                        <button className='btn'>Login</button>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default NavBar;