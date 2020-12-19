import React, { useState } from "react";
import { Link } from "react-router-dom";
import Pokemon from "../../utils/Pokemon.png";
import PokemonWallpaper from "../../utils/PokemonWallpaper.jpeg"
import Starters from "../../utils/PokedexPictures/Starters.gif";
import StartersStill from "../../utils/PokedexPictures/StartersStill.gif";
import "./SmallPokemon.css"

function PokemonHolder() {

    const [starters, setStarters] = useState(StartersStill);
  

    const style = {
        backgroundImage: `url(${PokemonWallpaper})`
    }

    const pokemonApp = () => {
        setStarters(Starters);
    }

    const stills = () => {
        setStarters(StartersStill);
    }

  
    
    return (
    <div className="container">
        <Link to="/pokedex">
            <div onMouseEnter={pokemonApp} onMouseLeave={stills}style={ style } className="container pokeBorder">
                <div className="row">
                    <div className="col-6">
                        <img style={{width: "450px", height: "auto", paddingTop: "40px", paddingBottom: "75px"}} className="pokemon" alt={Pokemon} src={Pokemon}></img>
                    </div>
                    <div className="col-6">
                        <img style={{paddingTop: "135px", width: "100%"}} alt={Starters} src={starters}></img>
                    </div>
                </div>
            </div>
        </Link>

    </div>
    )
}

export default PokemonHolder