import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import Header from '../components/home/Header';
import React from 'react';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ App }/>
            <Route component={ Header }/>
        </Switch>
    </BrowserRouter>
)

export default Router;

