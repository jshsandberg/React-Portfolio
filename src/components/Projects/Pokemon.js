import React from "react";
import Pikachu from "../../utils/Pikachu.gif";
import "./Projects.css";

export default function Pokemon() {

    return (
        <div className="relative">
            <div className="box">
                <div className="pikachuHolder">
                    <img className="pikachu" src={Pikachu} alt="Pikachu" />
                </div>
                <h1 className="titlePokemon">Pokemon</h1>
            </div>
        </div>
  
    )
}