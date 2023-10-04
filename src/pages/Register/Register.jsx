/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const Register = () => {


    const {createUser}= useContext(AuthContext)
    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email=form.get('email');
        const password = form.get('password');
        const name = form.get('name');
        const photo = form.get('photo');
        console.log(email,password,name,photo);

    createUser(email,password)
    .then(result =>{
        console.log(result.user);
    })
    .catch(error =>{
        console.log(error);
    })
    }
    return (
        <div>
              <Navbar></Navbar>
         <div>
         <h2 className="text-3xl my-10 text-center">Register your account</h2>

                <form onSubmit={handleRegister} className='md:w-3/4 lg:w-1/2 mx-auto'>

                        <div className="form-control">
                        <label className="label">
                        <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="name" name='name' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                        <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" placeholder="Photo URL" name='photo' className="input input-bordered" required />
                        </div>
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
                    <p className='text-center mt-5'>Already  have an account <Link to="/login" className='text-blue-500'> Login</Link></p>
         </div>
        </div>
    );
};

export default Register;