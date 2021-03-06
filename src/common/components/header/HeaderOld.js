import React from 'react';
// import logo from './logo.svg';

import { Link, IndexLink } from 'react-router'

class Header extends React.Component {

  state = {
    version: 0
  };

  render() {
    return (
      <div id="main-nav" className="navbar bs-docs-nav fixed" role="banner">
          <div className="container">
              <div className="navbar-header responsive-logo">
                  <button className="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target="#bs-navbar-collapse" aria-expanded="false">
                      <span className="sr-only">Toggle navigation</span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                  </button>
                  <div className="navbar-brand">
                      {/* <img src="images/logo.png" alt="Zerif" /> */}
                  </div>
              </div>
              <nav className="navbar-collapse collapse" role="navigation" id="bs-navbar-collapse" aria-expanded="false" >
                  <ul className="nav navbar-nav navbar-right responsive-nav main-nav-list">

                      <li><Link to="/" activeClassName="active" onlyActiveOnIndex={true}>Home Link</Link></li>
                      <li><IndexLink to="/" activeClassName="active">Home IndexLink</IndexLink></li>

                      <li className=""><a href="#focus">Focus</a></li>
                      <li className=""><a href="#works">Works</a></li>

                      <li className=""><Link to="/about">About</Link></li>
                      <li className=""><Link to="/repos">Repos</Link></li>


                  </ul>
              </nav>
          </div>
      </div>
      );
    }
}

export default Header;
