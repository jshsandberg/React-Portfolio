import React from "react";
import Pokedex1 from "../../utils/PokedexPictures/Pokedex1.png"
import Pokedex2 from "../../utils/PokedexPictures/Pokedex2.png"
import Pokedex3 from "../../utils/PokedexPictures/Pokedex3.png"
import ImageFadeIn from "react-image-fade-in";
import "./style.css"
import RecipeHolder from "../RecipeHolder";
import RoadmapHolder from "../RoadmapHolder";



function PokemonPictures() {


    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-7">
                        <div style={{borderStyle: "solid"}} className="container">
                            <div className="row">
                                <div className="col">
                                    <ImageFadeIn opacityTransition={7} className="pokedex1 img-fluid" src={Pokedex1} alt={Pokedex1} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <ImageFadeIn opacityTransition={5} className="pokedex2 img-fluid" src={Pokedex2}alt={Pokedex2} />
                                </div>
                                <div className="col">
                                    <ImageFadeIn opacityTransition={2} className="pokedex3 img-fluid" src={Pokedex3}alt={Pokedex3} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-5">
                        <p>I wanted to find a project that I felt passionate about while still honing my skills with hooks, API's and other techniques. Creating a Pokedex with Gen I Pokemon has been extremely fun while also teaching me better practices. Learning how to plan a project has been a crucial point that I have learned while working on this project. I have gone through multiple versions of this application, thinking I was going to go one way and then realizing that way was either not efficient or just impractical. Still a work in progess; however, I am proud of the technological feat I have accomplished with this project.</p>
                    </div>
                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <div className="container">
                <div className="row">
                    <div className="col">
                    <RecipeHolder></RecipeHolder>
                    </div>
                    <div className="col">
                    <RoadmapHolder></RoadmapHolder>  
                    </div>
                    <div className="col">
                    
                    </div>
                </div>
            </div>
        </div>
        
    )
};

export default PokemonPictures