import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Router, Route, hashHistory } from 'react-router'

import './index.css';

import About from './common/routes/About';
import Repos from './common/routes/Repos';

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );


ReactDOM.render((
  <Router history={hashHistory}>
      <Route path="/" component={App}>
          {/* make them children of `App` */}
          <Route path="/repos" component={Repos}/>
          <Route path="/about" component={About}/>
      </Route>
  </Router>
),
  document.getElementById('root')
);
