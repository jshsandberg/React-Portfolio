import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Pikachu from "../../utils/Pikachu.gif";
import Recipe1 from "../../utils/RecipePictures/Recipe1.png";
import Recipe2 from "../../utils/RecipePictures/Recipe2.png";
import Recipe3 from "../../utils/RecipePictures/Recipe3.png";
import Recipe4 from "../../utils/RecipePictures/Recipe4.png";
import Seattle from "../../utils/RoadmapPictures/Seatlle.gif";
import NewYork from "../../utils/RoadmapPictures/NewYork.gif";
import SanFrancisco from "../../utils/RoadmapPictures/SanFrancisco.gif";
// import RecipeHolder from "../RecipeHolder";
import Wallpaper from "../../utils/RecipePictures/Wallpaper.jpg";
import Logo from "../../utils/InventoryPictures/logo.png";
import "./style.css";


function RecipeContent() {

    const [landmark, setLandmark] = useState(Seattle)

    useEffect(() => {
        let landmarkIndex = landmarks[Math.floor(Math.random() * landmarks.length)];
        setLandmark(landmarkIndex)
    },[])

    const landmarks = [Seattle, NewYork, SanFrancisco]


    const sectionStyle = {
        backgroundImage: `url(${Wallpaper})`
      }

    return (
    

        <div>
            <div className="container">
                <div className="row">
                    <div className="col">
                    <p>My group and I wanted to create an application that gave user's the oppurtunity to find their favorite dish and/or drink recipe. We created this application in June, hoping to give families who were stuck in quaritine a way to find recipes/drinks that were not only tasting, but easy to follow recipe. What we came up with is Recipes, a tool for everyone that helps them find recipes for food and drink! This application uses an API call from Edama. It only allows 10 calls per minute; hence, if user's refresh the page before the minute is up for more API calls, the applicaiton will not have food selections available. We use two API calls, one from Edama and the other from TheCocktailDB. This application is only a Front End Application, using Jquery and Bootstrap.</p>                    </div>
                    <div className="col-7">
                        <div style={{borderStyle: "solid"}} className="container">
                            <div>
                                <img className="img-responsive" style={{width: "100%"}} src={Recipe1}></img>
                            </div>
                        </div>
                    </div>
                </div>  
            </div> 
            <div>
                <hr
                    style={{
                        color: "blue",
                        backgroundColor: "#00bcd4",
                        height: 35
                    }}
                />    
            </div>  
            <div className="container">
                <div className="row">
                    <div className="col-7">
                        <div style={{borderStyle: "solid"}} className="container">
                            <div>
                                <img className="img-responsive" style={{width: "100%"}} src={Recipe2}></img>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <p>My responsibility in the making of the applicaiton was the API calls and the functionality of the applicaiton. This was my first attempt at creating a big applicaiton with a group. I am very proud of the work we were able to do and how the applicaiton looks; however, as I look back at the code, I see how much I have grown in my skills and logic when it comes to creating applications like this one. </p>          
                  </div>
                </div>  
            </div> 
            <br></br>
            <br></br>
            <div className="container">
                <div className="row">
                   
                    <div className="col">
                        <p>Recipes has a homepage that lets the user find multiple random dishes and drinks. It has a search bar that lets user's type in a drink or food of their choice and then the application will populate the search page with findings using the API calls. There is a random dish selector for user's who may not know what they want and would like a surprise. </p>
                        <br></br>
                        <h3>Come take a look here!  <a href="https://jshsandberg.github.io/Recipe/">Recipes</a></h3>
                    </div>
                    <div className="col-7">
                        <div style={{borderStyle: "solid"}} className="container">
                            <div>
                                <img className="img-responsive" style={{width: "100%"}} src={Recipe3}></img>
                            </div>
                        </div>
                    </div>
                </div>  
            </div> 
            <hr
                    style={{
                        color: "blue",
                        backgroundColor: "#00bcd4",
                        height: 35
                    }}
                /> 
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Link to="/roadmap"><img style={{width: "78%", paddingTop: "35px"}} src={landmark} /></Link>
                    </div>
                    <div className="col">
                       <Link to="/pokedex"><img style={{width: "85%", paddingTop: "45px"}} src={Pikachu} /></Link>
                    </div>
                    <div className="col">
                        <Link to="/shelfkeeper"><img style={{maxWidth: "60%", paddingTop: "58px"}} alt={Logo} src={Logo}></img></Link>
                    </div>
                </div>
            </div>                  
        </div>
    
    )
     
};

export default RecipeContent