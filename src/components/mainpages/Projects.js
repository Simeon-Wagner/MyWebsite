import React, {Component} from "react";
import Navbar from "../general/navbar";
import Footer from "../general/footer";
import ProjectOverview from "../general/projectOverview";
import "./mainpage.css";
class Projects extends Component {
    state = {  } 
    render() { 
        return (
            <>
            <Navbar/>
            <div className='main'>
            <ProjectOverview/>
            <div className="list-projects">
                List of My Projects
            </div>
            </div>
            <Footer/>
            </>
        );
    }
}
 
export default Projects;