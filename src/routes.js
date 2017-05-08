import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './component/App/App';
import Home from './component/Home/Home';
import About from './component/About/About';
import CoursePage from './component/Course/CoursePage';
import ManageCourse from './component/Course/ManageCourse';

export default (
    <Route path = "/" component = {App}>
        <IndexRoute component = {Home}/>
        <Route path = "about" component = {About}></Route>
        <Route path = "courses" component = {CoursePage}></Route>
        <Route path  = "course" component = {ManageCourse}></Route>
        <Route path  = "course/:id" component = {ManageCourse}></Route>
    </Route>
)
