import React from "react";
import PokemonHolder from "../components/PokemonHolder/index.js";
import RecipeHolder from "../components/RecipeHolder/index.js";
import RoadmapHolder from "../components/RoadmapHolder/index.js"
import WelcomeNavBar from "../components/WelcomeNavBar";
import ShelfHolder from "../components/ShelfHolder/shelfholder.js";
//import Modal from "../components/TooltipModal/index.js"


function ProjectPage() {
    return (
        <div>
            <WelcomeNavBar></WelcomeNavBar>
            <br></br>
            <br></br>
            <RoadmapHolder></RoadmapHolder>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <PokemonHolder></PokemonHolder>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <ShelfHolder></ShelfHolder>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <RecipeHolder></RecipeHolder>
            <br></br>
        </div>
    )
};

export default ProjectPage