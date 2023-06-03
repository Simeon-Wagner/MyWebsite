import React, { Component } from 'react';
import Navbar from '../general/navbar';
import Profile from '../home/profile';
import ProjectOverview from '../general/projectOverview';
import Footer from '../general/footer';
import "./mainpage.css";

class Home extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <Navbar/>
                <div className='main'>
                <Profile/>
                <ProjectOverview/>
                </div>
                <Footer/>
            </React.Fragment>
        );
    }
}

export default Home;