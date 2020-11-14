import React from "react";
import RecipeContent from "../components/RecipeContent/index";
import NavBar from "../components/WelcomeNavBar/index";

function RecipePage() {
    return (
        <div>
            <NavBar></NavBar>
            <RecipeContent></RecipeContent>
        </div>
    )
};

export default RecipePage