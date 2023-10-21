import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from '../../shared/NavBar/NavBar';

const Login = () => {
    const { signIn, signInWithGoogle } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [loginError, setLoginError] = useState('');

    const handelLogin = async (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        setLoginError('');

        try {
            await signIn(email, password);
            console.log('Login successful');
            navigate(location?.state ? location.state : '/');
        } catch (error) {
            console.error('Login error:', error.message);
            setLoginError(error.message);
            toast.error(error.message);
        }
    }

    const handleSignInWithGoogle =()=>{
        signInWithGoogle()
        .then(result => {
            console.log(result);
        })
        .catch(error=>{
            console.error(error);
        })
    }

    return (
        <div>
            <NavBar></NavBar>

            <form onSubmit={handelLogin}>

                <div className="hero min-h-screen bg-base-200">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                        <div className="card-body">
                            <h2 className="text-2xl font-bold text-center italic">Please Login here</h2>
                            <div className="form-control">
                                <label className="laabel">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Email"
                                    name="email"
                                    className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="Password"
                                    name="password"
                                    className="input input-bordered" required />
                                <label className="label">
                                    <p>Forgot password?</p>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            {loginError && <p className="text-red-500">{loginError}</p>}
                            <p>Please <Link to='/register' className="text-blue-700">Register</Link> here</p>
                            <p><button onClick={handleSignInWithGoogle} className='btn'>Google Login</button></p>
                        </div>
                    </div>
                </div>

            </form>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={true}
                rtl={false}
                pauseOnFocusLoss={false}
                draggable={true}
                pauseOnHover={true}
            />
        </div>
    );
};

export default Login;
