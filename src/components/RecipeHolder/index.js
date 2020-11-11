import React from "react";
import Recipe from "../../utils/RecipePictures/Recipe.png";
import PizzaWallpaper from "../../utils/RecipePictures/PizzaWallpaper.gif"
import "./style.css"

function RecipeHolder() {



    const style = {
        backgroundImage: `url(${PizzaWallpaper})`
    }

 
    
    return (
    <div className="container">
        <div style={ style } className="container recipeBorder">
            <div className="row">
             
                <div className="col">
                    <img className="recipe" alt={Recipe} src={Recipe}></img>
                </div>
             
            </div>
        </div>
    </div>
    )
}

export default RecipeHolder