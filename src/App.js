import React, { Component } from 'react';

import './App.css';


import Header from './common/components/header/Header';
import Footer from './common/components/footer';
import Jumbotron from './common/components/jumbotron';



class App extends Component {
  render() {
    return (

      <div className="App">

          <Header />

          {/*<Jumbotron />
          <Jumbotron />*/}
          
          {/* add this */}
          {this.props.children}

          <Footer />

      </div>

    );
  }
}

export default App;
