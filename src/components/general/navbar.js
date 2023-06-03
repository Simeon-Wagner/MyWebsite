import React, { Component } from 'react';
import "./navbar.css"


class  Navbar extends Component {
    state = {  } 
    render() { 
        return (        
            <nav  className="navbar">
                <div className="nav-container">
                    <a href='/'>Home</a>
                    <a href='/projects'>Projects</a>
                    <a href='/blog'>Blog</a>
                </div>
            </nav>
        );
    }
}
 
export default Navbar