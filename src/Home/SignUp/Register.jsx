import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from '../../shared/NavBar/NavBar';

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');

    const handelRegister = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');

        setRegisterError('');
        setSuccess('');

        if (password.length < 6) {
            setRegisterError('Password should be at least 6 characters long');
            return;
        } else if (!/[A-Z]/.test(password)) {
            setRegisterError('Password should contain at least one capital letter');
            return;
        } else if (!/[!@#$%^&*()_+[\]{};':"\\|,.<>?]/.test(password)) {
            setRegisterError('Password should contain at least one special character');
            return;
        }

        createUser(email, password)
            .then(result => {
                const user = result.user;
                user.displayName = name;

                setSuccess('User created successfully');
                toast.success('User created successfully');
                console.log('Photo URL:', photo);
            })
            .catch(error => {
                console.error(error);
                setRegisterError(error.message);
                toast.error(error.message);
            })
    }

    return (
        <div>
            <NavBar />
            <form onSubmit={handelRegister}>
                <div className="hero min-h-screen bg-base-200">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h2 className="text-2xl font-bold text-center italic">Please register here</h2>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                    
                                </label>
                                <input type="password" placeholder="Password" name="password" className="input input-bordered" required />
                                
                                <p className="text-xs text-gray-500 mt-1">
                                    Password should be at least 6 characters long and contain at least one capital letter and one special character.
                                </p>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                            <p>Already have an account?
                                <br />
                                Please <Link to='/login' className="text-blue-700">Login</Link> here</p>
                        </div>
                    </div>
                </div>
            </form>
            {registerError && <p>{registerError}</p>}
            <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
        </div>
    );
};

export default Register;
