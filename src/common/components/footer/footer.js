import React from 'react';

class Footer extends React.Component {

  state = {
    version: 0
  };

  render() {

    return (
      <div>© Template - v{this.state.version}</div>
    );

  }

}

export default Footer;
