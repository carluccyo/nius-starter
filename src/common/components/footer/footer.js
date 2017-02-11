import React from 'react';
import './Footer.css';

class Footer extends React.Component {

  state = {
    version: 0
  };

  render() {

    return (
      <footer className="blog-footer">
          <p>Blog template built for <a href="http://getbootstrap.com">Bootstrap</a> by <a href="https://twitter.com/mdo">@mdo</a>.</p>
          <p>
              <a href="#">Back to top</a>
          </p>
      </footer>

    );

  }

}



export default Footer;
