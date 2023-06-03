import React, {Component} from "react";
import { Carousel } from "./carousel";
import './projectOverview.css'
import {Link} from 'react-router-dom';
class ProjectOverview extends Component {
    state = {  } 
    render() { 
        return (
            <div className="project-overview-container">
                <div className="project-title">
                <Link to="/MyWebsite/projects">My Projects</Link>
                </div>
                <p>
                    Here you have a brief overview over the different projects I made and documented during my programming journey 
                </p>
                <Carousel/>
            </div>
        );
    }
}
 
export default ProjectOverview;