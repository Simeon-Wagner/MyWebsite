import React, { Component } from 'react';
import "./navbar.css"


class  Navbar extends Component {
    state = {  } 
    render() { 
        return (        
            <nav  className="navbar">
                <div className="nav-container">
                    <a href='MyWebsite'>Home</a>
                    <a href='MyWebsite/projects'>Projects</a>
                    <a href='MyWebsite/blog'>Blog</a>
                </div>
            </nav>
        );
    }
}
 
export default Navbar