import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { loadCourses } from './actions/courseActions';
import { loadAuthors } from './actions/authorActions';
import configureStore from './store/configStore';

import routes from './routes';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

const store  =  configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());

ReactDOM.render(
  <Provider store = {store}>
    <Router history = {browserHistory} routes = {routes}/>
  </Provider>,
  document.getElementById('root')
);
