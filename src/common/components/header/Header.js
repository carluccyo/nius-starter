import React from 'react';
import logo from './logo.svg';

class Header extends React.Component {

  state = {
    version: 0
  };

  render() {
    return (
      <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>New Header Welcome to React</h2>
      </div>
    );
  }

}

export default Header;
