import React, { Component } from 'react';
import "./navbar.css"


class  Navbar extends Component {
    state = {  } 
    render() { 
        return (        
            <nav  className="navbar">
                <div className="nav-container">
                    <a href='/'>Home</a>
                    <a href='/'>Projects</a>
                    <a href='/'>Blog</a>
                </div>
            </nav>
        );
    }
}
 
export default Navbar