import React, { useState, useEffect } from "react";
import Pokemon from "../../utils/Pokemon.png";
import Pikachu from "../../utils/Pikachu.gif"
import Treeko from "../../utils/Treeko.gif"
import PokemonWallpaper from "../../utils/PokemonWallpaper.jpeg"
import Gary from "../../utils/Gary.gif"
import Cynthia from "../../utils/Cynthia.gif"
import CynthiaStill from "../../utils/CynthiaStill.gif"
import White from "../../utils/white.jpeg"
import GaryStill from "../../utils/GaryStill.gif"
import "./style.css"

function ProjectHolder(props) {

    const [leftPic, setLeftPic] = useState(CynthiaStill);
    const [rightPic, setRightPic] = useState(GaryStill);
    const [active, setActive] = useState()

    useEffect(() => {
     console.log("render")

    }, [rightPic])

    const style = {
        backgroundImage: `url(${PokemonWallpaper})`
    }

    const pokemonApp = () => {
        setRightPic(Gary);
        setLeftPic(Cynthia);
    }

    const stills = () => {
        setLeftPic(CynthiaStill);
        setRightPic(GaryStill)
    }

    
    return (
    <div>
        <div onMouseEnter={pokemonApp} onMouseLeave={stills}style={ style } className="container pokeBorder">
            <div className="row">
                <div className="col">
                    <img className="pikachu" src={Pikachu}></img>
                </div>
                <div className="col">
                    <img className="pokemon" src={Pokemon}></img>
                </div>
                <div className="col">
                    <img className="treeko" src={Treeko}></img>
                </div>
            </div>
        </div>
        <div>
            <img className="gary" src={rightPic}></img>
            <img className="cynthia" src={leftPic}></img>        
        </div>
    </div>
    )
}

export default ProjectHolder