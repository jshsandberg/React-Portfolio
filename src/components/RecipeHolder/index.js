import React from "react";
import { Link } from "react-router-dom"
import Recipe from "../../utils/RecipePictures/Recipe.png";
import PizzaWallpaper from "../../utils/RecipePictures/PizzaWallpaper.gif"
import "./style.css"

function RecipeHolder() {



    const style = {
        backgroundImage: `url(${PizzaWallpaper})`
    }

 
    
    return (
            <div className="container">
                <Link to="/recipe"> 
                    <div style={ style } className="container recipeBorder">
                        <div className="row">
                            <div className="col">
                                <img className="recipe" alt={Recipe} src={Recipe}></img>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
     
    )
}

export default RecipeHolder