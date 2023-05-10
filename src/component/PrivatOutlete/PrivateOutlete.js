import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import UseAuth from '../../hooks/useAuth';


const PrivateOutlet = () => {
    const {user} = UseAuth();
    const location = useLocation();
    return user.email? <Outlet/> : <Navigate to="/login" state={{from : location}} replace />
};

export default PrivateOutlet;