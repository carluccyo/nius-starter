import React, { Component } from 'react';

import './App.css';


import Header from './common/components/header/Header';
import Footer from './common/components/footer';
import Jumbotron from './common/components/jumbotron';



class App extends Component {
  render() {
    return (

      <div className="App container-fluid">

          <Header />

          <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <Jumbotron />

          {/* add this */}
          {this.props.children}

          <Footer />

      </div>

    );
  }
}

export default App;
