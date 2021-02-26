import React from 'react';
import { 
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from '../../utils/Auth/AuthToken';
import {
    setCurrentUser,
    logoutUser
} from '../Redux/Actions/authActions';

import Navbar from './Navbar';
import Homepage from '../Home/index';
import Register from '../Auth/Register';
import Login from '../Auth/Login';
import PrivateRoute from './PrivateRoutes';
import Dashboard from '../Dashboard/index';
import store from '../Redux/store';

// Check local storage for token to keep the user logged in
if (localStorage.jwtToken) {
    const token = localStorage.jwtToken;
    setAuthToken(token);
    // Decode token and get user info/expiry
    const decoded = jwt_decode(token);
    // Set user and isAuthenticated
    store.dispatch(setCurrentUser(decoded));
    // Get current time in milliseconds
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
        // Logout user and redirect to login
        store.dispatch(logoutUser());
        window.location.href = './login';
    }
}

function Routes() {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Homepage} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;