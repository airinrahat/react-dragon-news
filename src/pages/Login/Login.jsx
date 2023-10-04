/* eslint-disable no-unused-vars */
import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const Login = () => {
    const {singIn} =useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log("location in the login",location);

    const handleLogin = e =>{
        e.preventDefault();
        // const email = e.target.email.value;
        // const password = e.target.password.value;
        // console.log(email,password);
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);
        singIn(email,password)
        .then(result =>{
            console.log(result.user);
            navigate(location?.state ? location.state : '/');
        })
        .catch(error =>{
           console.log(error);
        })
    }
    return (
        <div>
            <Navbar></Navbar>
         <div>
         <h2 className="text-3xl my-10 text-center">Please Login</h2>

                <form onSubmit={handleLogin} className='md:w-3/4 lg:w-1/2 mx-auto'>

                        <div className="form-control">
                        <label className="label">
                        <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                        <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                        </div>
                </form>
                    <p className='text-center mt-5'>Do not have an account <Link to="/register" className='text-blue-500'> Register</Link></p>
         </div>


           
  
        </div>
    );
};

export default Login;