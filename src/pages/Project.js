import React from "react";
import PokemonHolder from "../components/PokemonHolder/index.js";
import RecipeHolder from "../components/RecipeHolder/index.js";
import RoadmapHolder from "../components/RoadmapHolder/index.js"
import WelcomeNavBar from "../components/WelcomeNavBar";
import Modal from "../components/TooltipModal/index.js"


function ProjectPage() {
    return (
        <div>
            <WelcomeNavBar></WelcomeNavBar>
            <h1>Projects</h1>;
            <PokemonHolder></PokemonHolder>
            {/* Make css for space, DONT USE BR */}
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <RecipeHolder></RecipeHolder>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <RoadmapHolder></RoadmapHolder>
        </div>
    )
};

export default ProjectPage