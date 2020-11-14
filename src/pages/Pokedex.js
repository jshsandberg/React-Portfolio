import React from "react";
import PokemonPictures from "../components/PokemonPictures";
import WelcomeNavBar from "../components/WelcomeNavBar";

function PokedexPage () {
    return ( 
    <div>
        <WelcomeNavBar></WelcomeNavBar>
        <PokemonPictures></PokemonPictures>
    </div>
    )
};

export default PokedexPage