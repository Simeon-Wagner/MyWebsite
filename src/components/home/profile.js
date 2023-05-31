import React, { Component } from 'react';
import ProfilePicture from "../profilePicture";

import "./profile.css"
import LinkContainer from '../linkContainer';

class Profile extends Component {
    state = {  } 
    render() { 
        return (
            <div className='profile'>
                <div className="profile-container">
                    <div className="image">
                        <ProfilePicture/>
                    </div>
                    
                    <div className="information">
                        <div>
                            <h2>
                                Simeon Wagner
                            </h2>
                        </div>
                        <ul>
                            <li>BA of Computer Science</li>
                            <li>Working at Vector GmbH</li>
                        </ul> 
                    </div>
                    <div>
                        <LinkContainer/>
                    </div>                                                   
                </div>
                
                <div className="description-container">
                    <h1>
                        About me
                    </h1>
                    
                    <p>
                        Hello! Nice to meet you! I am Simeon Wagner and I'm currently studying Computer Science at the University of applied Sciences in Stuttgart.
                        I was born and raised in Italy, but currently living in Germany. 
                        <br></br>
                        <br></br>
                        In University I mainly programmed in Java and I have to say that, even though writing a lot of boilerplate code can be annoying, I 
                        really enjoy programming with it. I think it is the perfect abstraction layer between a programming language close to hardware as 
                        C is and a higher interpreted language like Python.
                    </p>
                </div>
            </div>
        );
    }
}
 
export default Profile;