import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import "./navbar.css"


class  Navbar extends Component {
    state = {  } 
    render() { 
        return (        
            <nav  className="navbar">
                <div className="nav-container">
                    <Link to='/MyWebsite'>Home</Link>
                    <Link to='/MyWebsite/projects'>Projects</Link>
                    <Link to='/MyWebsite/blog'>Blog</Link>
                </div>
            </nav>
        );
    }
}
 
export default Navbar