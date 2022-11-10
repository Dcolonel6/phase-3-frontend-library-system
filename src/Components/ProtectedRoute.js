import React from 'react';
import { redirect, Route } from 'react-router-dom';
import Login from './login/Login';


const ProtectedRoute = ({ component: Component,  ...rest }) => {
  const isAuthenticated = sessionStorage.getItem('user')
  return <Route {...rest} render={(props) => {
    if (isAuthenticated) {
      return <Component />;
    } else {
      return <Login/> 
    }
  }} />
}

export default ProtectedRoute;