import React from "react";
import PokemonHolder from "../components/PokemonHolder/index.js";
import RecipeHolder from "../components/RecipeHolder/index.js";
import RoadmapHolder from "../components/RoadmapHolder/index.js"
import WelcomeNavBar from "../components/WelcomeNavBar";
import ShelfHolder from "../components/ShelfHolder/shelfholder.js";
import NoGarchomp from "../components/SmallPokemonHolder/SmallPokemonHolder.js";
//import Modal from "../components/TooltipModal/index.js"


function ProjectPage() {

    const isMobile = window.innerWidth < 1350;

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
            {isMobile ? <NoGarchomp></NoGarchomp> : <PokemonHolder></PokemonHolder>}
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