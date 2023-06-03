import React, { Component } from 'react';
import './footer.css'
import LinkContainer from './linkContainer';
import {Link} from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
            <span className="text-muted">© 2023 Simeon Wagner.</span>
            <div className='line'></div>
            <div className='nav-footer-container'>
              <Link to="/MyWebsite">Home</Link>
              <Link to="/MyWebsite/impressum">Impressum</Link>
              <Link to="#">Contact</Link>
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
