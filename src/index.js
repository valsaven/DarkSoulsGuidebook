import React from 'react';
import ReactDOM from 'react-dom';

import { Router, hashHistory } from 'react-router';
import routes from './routes';

import './index.css';

const root = document.getElementById('root');

ReactDOM.render(
  <Router history={hashHistory}>
    {routes}
  </Router>,
  root
);
