import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Picture1 from "../../utils/RoadmapContentPictures/screenshot.png";
import Picture2 from "../../utils/RoadmapContentPictures/pic.png";
import Picture3 from "../../utils/RoadmapContentPictures/picture.png";
import Pikachu from "../../utils/Pikachu.gif";
import Seattle from "../../utils/RoadmapPictures/Seatlle.gif";
import NewYork from "../../utils/RoadmapPictures/NewYork.gif";
import SanFrancisco from "../../utils/RoadmapPictures/SanFrancisco.gif";
import Logo from "../../utils/InventoryPictures/logo.png";
import Recipe from "../../utils/RecipePictures/Recipe.png";


function RoadmapContent() {

    const [landmark, setLandmark] = useState(Seattle)

    useEffect(() => {
        let landmarkIndex = landmarks[Math.floor(Math.random() * landmarks.length)];
        setLandmark(landmarkIndex)
    },[])

    const landmarks = [Seattle, NewYork, SanFrancisco]


    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-5">
                    <p>0It is safe to assume that by fitting you mean covering all of the width. This is becauseYou typically do not know the height just by using col-sm-6 or col-md-6 or col-lg-4.There is a huge probability of loss in aspect ratio of the image if you try to resize it according to your own will.Use img src = "images/dummy_image.png" class = "img-responsive" width = "100%" for fitting the column. This will fit your image width-wise into the c</p>

                    </div>
                    <div className="col-7">
                        <img style={{maxWidth: "100%"}} src={Picture3} />
                    </div>
                </div>
                <br></br>
                <div className="row">
                    <div className="col-8">
                        <img style={{maxWidth: "100%"}} src={Picture1} />
                    </div>
                    <div className="col-4">
                    <p>0It is safe to assume that by fitting you mean covering all of the width. This is becauseYou typically do not know the height just by using col-sm-6 or col-md-6 or col-lg-4.There is a huge probability of loss in aspect ratio of the image if you try to resize it according to your own will.Use img src = "images/dummy_image.png" class = "img-responsive" width = "100%" for fitting the column. This will fit your image width-wise into the c</p>

                    </div>
                </div>
                <br></br>
                <div className="row">
                    <div className="col-5">
                    <p>0It is safe to assume that by fitting you mean covering all of the width. This is becauseYou typically do not know the height just by using col-sm-6 or col-md-6 or col-lg-4.There is a huge probability of loss in aspect ratio of the image if you try to resize it according to your own will.Use img src = "images/dummy_image.png" class = "img-responsive" width = "100%" for fitting the column. This will fit your image width-wise into the c</p>

                    </div>
                    <div className="col-7">
                        <img style={{maxWidth: "100%"}} src={Picture2} />   
                    </div>
                </div>
            </div> 
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Link to="/shelfkeeper"><img style={{maxWidth: "60%", paddingTop: "58px"}} alt={Logo} src={Logo}></img></Link>
                    </div>
                    <div className="col">
                        <Link to="/recipe"><img style={{width: "75%"}} className="recipe" alt={Recipe} src={Recipe}></img></Link>
                    </div>
                    <div className="col">
                       <Link to="/pokedex"><img style={{width: "85%", paddingTop: "45px"}} src={Pikachu} /></Link>
                    </div>
                   
                </div>
            </div>                  
        </>
    )
}

export default RoadmapContent