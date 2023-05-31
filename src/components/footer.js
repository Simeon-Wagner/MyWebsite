import React, { Component } from 'react';
import './footer.css'

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <span className="text-muted">This is the footer.</span>
          <ul className="footer-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="footer-bottom">
          <span className="text-muted">© 2023 Your Website. All rights reserved.</span>
        </div>
      </footer>
    );
  }
}

export default Footer;
