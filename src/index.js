import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Router, Route, hashHistory } from 'react-router'

import './index.css';

import About from './common/routes/About';
import Repos from './common/routes/Repos';
import Repo from './common/routes/Repo';

import Dashboard from './common/routes/Dashboard';

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );


ReactDOM.render((
  <Router history={hashHistory}>
      <Route path="/" component={App}>
          {/* make them children of `App` */}
          <Route path="/repos" component={Repos}>
              {/* add the new route */}
              <Route path="/repos/:userName/:repoName" component={Repo}/>
          </Route>
          <Route path="/about" component={About}/>
          <Route path="/dashboard" component={Dashboard}/>
      </Route>
  </Router>
),
  document.getElementById('root')
);
