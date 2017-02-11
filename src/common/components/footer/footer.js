import React from 'react';
import './Footer.css';

class Footer extends React.Component {

  state = {
    version: 0
  };

  render() {

    return (
      <div className="Footer"><p>© Template - v{this.state.version}</p></div>
    );

  }

}



export default Footer;
