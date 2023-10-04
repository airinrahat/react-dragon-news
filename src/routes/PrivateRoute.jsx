/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Children } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user} = useContext(AuthContext);
    const location = useLocation();
    console.log(location.pathname);

    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>;
   
};

export default PrivateRoute;