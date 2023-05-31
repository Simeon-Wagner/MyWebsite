import React, {Component} from "react";
import { Carousel } from "./carousel";
import './projectOverview.css'

class ProjectOverview extends Component {
    state = {  } 
    render() { 
        return (
            <div className="project-overview-container">
                <h1>
                    My Projects
                </h1>
                <p>
                    Here you have a brief overview over the different projects I made and documented during my programming journey 
                </p>
                <Carousel/>
            </div>
        );
    }
}
 
export default ProjectOverview;