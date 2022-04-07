import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import { Redirect } from "react-router-dom"
import Login from "../pages/Login";
import { AuthContext } from '../contexts/LoginContext';
import { useContext } from 'react';


const PrivateRoute = ({ component: Component, ...rest }) => {
  const currentUser = useContext(AuthContext)
  return (
    <Route
      render={props => {
        return currentUser.currentUser ? <Component {...props} /> : <Redirect to="/login" />
      }}
    ></Route>
  )
}

export default PrivateRoute;