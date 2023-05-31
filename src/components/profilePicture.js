import React, { Component } from 'react';
import "./profilePicture.css"
import profilePicture from '../pictures/profilePictureQuadratic.jpg';

class  ProfilePicture extends Component {
    state = {  } 
    render() { 
        return (     
            <div >
                <img src={profilePicture} alt="Profile" />
            </div>
        );
    }
}
 
export default ProfilePicture