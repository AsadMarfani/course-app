import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './component/App/App';
import Home from './component/Home/Home';
import About from './component/About/About';

export default (
    <Route path = "/" component = {App}>
        <IndexRoute component = {Home}/>
        <Route path = "about" component = {About}></Route>
    </Route>
)
