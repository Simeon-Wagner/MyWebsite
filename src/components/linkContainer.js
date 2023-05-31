import React, { Component } from 'react';
import { FaLinkedin, FaGithub, FaStackOverflow } from 'react-icons/fa';
import './linkContainer.css'

class LinkContainer extends Component {
    state = {  } 
    render() { 
        return (
    <div className = "link-container">
        <div className='heading'>
            <h3>
                You find me on
            </h3>
         </div>
        
        <div className="icon-container">
            <a href="https://www.linkedin.com/in/simeon-wagner-79b257200/">
                <FaLinkedin size={40} color='blue'/>
            </a>
            <a href="https://github.com/Simeon-Wagner">
                <FaGithub size={40} color='black'/>
            </a>
            <a href="https://github.com/Simeon-Wagner">
                <FaStackOverflow size={40} color='#b37400'/>
            </a>
        </div>
    </div> 
    );
    }
}
 
export default LinkContainer;