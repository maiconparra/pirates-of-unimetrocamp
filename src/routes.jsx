import React, { useState, useEffect } from 'react';
import { Switch, Redirect, Route, BrowserRouter } from 'react-router-dom';

import Post from './pages/Post';
import Landing from './pages/Landing';

function Routes()
{
    return (

    <BrowserRouter>
        <Switch>
            <Route 
                component={Landing}
                exact
                path="/"
            />
            <Route
                component={Post}
                exact
                path="/post"
            />

        </Switch>
    </BrowserRouter>
    );
}

export default Routes;