import React, { useState } from "react";
import { Link } from "react-router-dom";
import Pokemon from "../../utils/Pokemon.png";
import Pikachu from "../../utils/Pikachu.gif"
import Treeko from "../../utils/Treeko.gif"
import PokemonWallpaper from "../../utils/PokemonWallpaper.jpeg"
import Gary from "../../utils/Gary.gif"
import Cynthia from "../../utils/Cynthia.gif"
import CynthiaStill from "../../utils/CynthiaStill.gif"
import GaryStill from "../../utils/GaryStill.gif"
import PikachuStill from "../../utils/PikachuStill.gif"
import TreekoStill from "../../utils/TreekoStill.gif"
import ButterfreeStill from "../../utils/ButterfreeStill.gif";
import Butterfree from "../../utils/Butterfree.gif";
import "./style.css"

function PokemonHolder() {

    const [leftPic, setLeftPic] = useState(CynthiaStill);
    const [rightPic, setRightPic] = useState(GaryStill);
    const [treeko, setTreeko] = useState(TreekoStill);
    const [pikachu, setPikachu] = useState(PikachuStill);
    const [butterfree, setButterfree] = useState(ButterfreeStill);
  

    const style = {
        backgroundImage: `url(${PokemonWallpaper})`
    }

    const pokemonApp = () => {
        setRightPic(Gary);
        setLeftPic(Cynthia);
        setPikachu(Pikachu);
        setTreeko(Treeko);
        setButterfree(Butterfree);
    }

    const stills = () => {
        setLeftPic(CynthiaStill);
        setRightPic(GaryStill);
        setTreeko(TreekoStill);
        setPikachu(PikachuStill);
        setButterfree(ButterfreeStill);
    }

    // const pokemonData = (e) => {
    //   console.log(e)
    // }

    
    return (
    <div className="container">
        <Link to="/pokedex">
            <div onMouseEnter={pokemonApp} onMouseLeave={stills}style={ style } className="container pokeBorder">
                <div className="row">
                    <div className="col">
                        <img className="pikachu" alt={pikachu} src={pikachu}></img>
                        <img className="cynthia" alt={leftPic} src={leftPic}></img>   
                        <img className="butterfree" alt={butterfree} src={butterfree}></img> 
                    </div>
                    <div className="col">
                        <img className="pokemon" alt={Pokemon} src={Pokemon}></img>
                    </div>
                    <div className="col">
                        <img className="treeko" alt={treeko} src={treeko}></img>
                        <img className="gary" alt={rightPic} src={rightPic}></img>
                    </div>
                </div>
            </div>
        </Link>

    </div>
    )
}

export default PokemonHolder