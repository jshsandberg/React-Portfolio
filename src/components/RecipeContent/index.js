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
                        <p>0It is safe to assume that by fitting you mean covering all of the width. This is becauseYou typically do not know the height just by using col-sm-6 or col-md-6 or col-lg-4.There is a huge probability of loss in aspect ratio of the image if you try to resize it according to your own will.Use img src = "images/dummy_image.png" class = "img-responsive" width = "100%" for fitting the column. This will fit your image width-wise into the c</p>
                    </div>
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
                        <p>0It is safe to assume that by fitting you mean covering all of the width. This is becauseYou typically do not know the height just by using col-sm-6 or col-md-6 or col-lg-4.There is a huge probability of loss in aspect ratio of the image if you try to resize it according to your own will.Use img src = "images/dummy_image.png" class = "img-responsive" width = "100%" for fitting the column. This will fit your image width-wise into the c</p>
                    </div>
                </div>  
            </div> 
            <br></br>
            <br></br>
            <div className="container">
                <div className="row">
                   
                    <div className="col">
                        <p>0It is safe to assume that by fitting you mean covering all of the width. This is becauseYou typically do not know the height just by using col-sm-6 or col-md-6 or col-lg-4.There is a huge probability of loss in aspect ratio of the image if you try to resize it according to your own will.Use img src = "images/dummy_image.png" class = "img-responsive" width = "100%" for fitting the column. This will fit your image width-wise into the c</p>
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