import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Router, Route, hashHistory } from 'react-router'

import './index.css';

import About from './common/routes/About';

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );


ReactDOM.render((
  <Router history={hashHistory}>
      <Route path="/" component={App}/>
      <Route path="/about" component={About}/>
  </Router>
),
  document.getElementById('root')
);
