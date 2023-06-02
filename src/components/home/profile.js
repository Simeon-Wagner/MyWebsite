import React, { Component } from 'react';
import ProfilePicture from "./profilePicture";

import "./profile.css"
import LinkContainer from '../general/linkContainer';

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
                    <h2>
                        About me
                    </h2>
                    
                    <p>
                    Hello, nice to meet you! <br /> <br />
                    I am Simeon Wagner, 22 years old and currently studying Computer Science at the University of Applied Sciences in Stuttgart. <br /> <br />
                    If you had asked me after graduating from high school if I would study computer science, I would have shaken my head laughing. I had hardly any relation to the world of computers since
                    I spent most of my life on my parents' self-sufficient farm in Italy. This is where I was born and raised, and computers were hardly a part of my life.
                    That's why I was all the more excited when I gave programming a chance. <br />
                    Lately, I decided to document my journey on my website. Here you'll find some of the projects I have programmed and documented. <br /><br />
                    I hope that some of the topics arouse your interest!<br /><br />

                    Through university I have mainly learned Java and I would say that it is the programming language for which I have developed the deepest understanding. 
                    However, I am open to any technology, so I am currently trying to broaden my programming language horizon.<br /><br />
                    For further questions or anything else, don't hesitate to contact me.
                    </p>
                </div>
            </div>
        );
    }
}
 
export default Profile;