import React, { ReactNode, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AppContext } from '../context/ContextProvider';

interface PrivateRouteProps {
    children: JSX.Element;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {

    const { isAuthenticated } = useContext(AppContext);

    return isAuthenticated ? children : <Navigate replace to="/" />

}

export { PrivateRoute };