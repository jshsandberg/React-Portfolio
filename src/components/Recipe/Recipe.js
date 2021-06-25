import React from "react";
import Recipe1 from "../../utils/Recipe/Recipe1.png";
import Recipe2 from "../../utils/Recipe/Recipe2.png";
import Recipe3 from "../../utils/Recipe/Recipe3.png";
import Recipe4 from "../../utils/Recipe/Recipe4.png";

import "./Recipe.css";

export default function Recipe() {

    return (
        <div className="recipeHolder">
            <div className="recipeText">
                <p>My group and I wanted to create an application that gave user's the oppurtunity to find their favorite dish and/or drink recipe. We created this application in June, hoping to give families who were stuck in quaritine a way to find recipes/drinks that were not only tasting, but easy to follow recipe. What we came up with is Recipes, a tool for everyone that helps them find recipes for food and drink! This application uses an API call from Edama. It only allows 10 calls per minute; hence, if user's refresh the page before the minute is up for more API calls, the applicaiton will not have food selections available. We use two API calls, one from Edama and the other from TheCocktailDB. This application is only a Front End Application, using Jquery and Bootstrap.</p>                    

                <p>My responsibility in the making of the applicaiton was the API calls and the functionality of the applicaiton. This was my first attempt at creating a big applicaiton with a group. I am very proud of the work we were able to do and how the applicaiton looks; however, as I look back at the code, I see how much I have grown in my skills and logic when it comes to creating applications like this one. </p>          

                <p>Recipes has a homepage that lets the user find multiple random dishes and drinks. It has a search bar that lets user's type in a drink or food of their choice and then the application will populate the search page with findings using the API calls. There is a random dish selector for user's who may not know what they want and would like a surprise. </p>
                <br></br>
                <h3>Come take a look here!  <a target="_blank" href="https://jshsandberg.github.io/Recipe/">Recipes</a></h3>
                <br></br>
                <h4><a target="_blank" href="https://github.com/jshsandberg/Recipe">Github Repository</a></h4>
            </div>
            <div className="recipePicture">
               <img className="recipePicture1" src={Recipe1} alt="recipe1" />
               <img className="recipePicture3" src={Recipe3} alt="recipe3" />
               <img className="recipePicture2" src={Recipe2} alt="recipe2" />
            </div>
        </div>
    )
}