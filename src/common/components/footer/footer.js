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
          {/* <p><a href="#">Back to top</a></p> */}

           <div>
            <small>You are running this application in <b>{process.env.NODE_ENV}</b> mode.</small>
            <form>
              <input type="hidden" defaultValue={process.env.REACT_APP_SECRET_CODE} />
            </form>
          </div>

      </footer>

    );

  }

}



export default Footer;
