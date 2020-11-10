import React from "react";
import ProjectHolder from "../components/ProjectHolder.js";
import WelcomeNavBar from "../components/WelcomeNavBar";


function ProjectPage() {
    return (
        <div>
            <WelcomeNavBar></WelcomeNavBar>
            <h1>Projects</h1>;
            <ProjectHolder></ProjectHolder>
        </div>
    )
};

export default ProjectPage