import React, { Component } from 'react';
import './footer.css'
import LinkContainer from './linkContainer';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
            <span className="text-muted">© 2023 Simeon Wagner.</span>
            <div className='line'></div>
            <div className='nav-footer-container'>
              <a href="MyWebsite/home">Home</a>
              <a href="MyWebsite/impressum">Impressum</a>
              <a href="#">Contact</a>
            </div>
        </div>
        <div className="footer-right">
          <LinkContainer/>
        </div>
      </footer>
    );
  }
}

export default Footer;
