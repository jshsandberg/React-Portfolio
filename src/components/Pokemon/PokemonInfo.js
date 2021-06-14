import React from "react";
import Pic1 from "../../utils/Pokedex4.png";
import Pic2 from "../../utils/Pokedex5.png";
import Pic3 from "../../utils/Pokedex6.png";
import "./PokemonInfo.css";


export default function PokemonInfo() {

    return (
        <div className="holderPokemon">
            <div className="boxPokemon">
                <img className="pictureOne" src={Pic1} alt="pictureOne" />
                <div className="bottomRow">
                    <img className="pictureTwo" src={Pic2} alt="pictureTwo" />
                    <img className="pictureThree" src={Pic3} alt="pictureThree" />
                </div>
            </div>
            <div className="pokemonText">
                <h5>I wanted to find a project that I felt passionate about while still honing my skills with hooks, API's and other techniques. Learning how to plan a project has been a crucial point that I have learned while working on this project. I have gone through multiple versions of this application, thinking I was going to go one way and then realizing that way was either not efficient or just impractical. Still a work in progess; however, I am proud of the technological feat I have accomplished with this project.</h5>
                <div className="links">
                    <h4><a target="_blank" href="https://jshsandberg.github.io/pokedex-v2/">Pokedex 2.0</a></h4>
                    <h4><a target="_blank" href="https://github.com/jshsandberg/pokedex-v2">Github</a></h4>
                </div>
            </div>
        </div>
 
    )
}