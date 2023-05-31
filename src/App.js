import React, { Component } from 'react';
import Navbar from './components/navbar';
import Profile from './components/home/profile';
import ProjectOverview from './components/home/projectOverview';
import Footer from './components/footer';
import "./App.css";

class App extends Component {
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

export default App;