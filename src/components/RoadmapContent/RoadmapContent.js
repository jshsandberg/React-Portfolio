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
import Background from "../../utils/RoadmapContentPictures/background.jpg";

function RoadmapContent() {

    const [landmark, setLandmark] = useState(Seattle)

    useEffect(() => {
        let landmarkIndex = landmarks[Math.floor(Math.random() * landmarks.length)];
        setLandmark(landmarkIndex)
    },[])

    const landmarks = [Seattle, NewYork, SanFrancisco]


    return (
        <>
            <div style={{backgroundImage: `url(${Background})`}}>
                <div  className="container">
                    <div className="row">
                        <div style={{backgroundColor: "white", border: "solid"}} className="col-5">
                            <p>Using HTML / CSS / Javascript / Jquery / Ajax on the Front End and Node.js / MySQL / MySQL Workbench / Heroku / Sequelize / dotENV / Express / HandleBars / NodeMailer  on the Back End, our team was able to create a functional and well-polished roadtrip tracking application. Calling it Road Trip Planner, our application allows the user to click on any state and save, delete, and view other users notes. Each state contains facts about them and are displayed when the corresponding state is clicked on. We wanted to create an application that targeted travellers and aventure seekers and help them keep track of their experinces. </p>
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
                        <div style={{backgroundColor: "white", border: "solid"}} className="col-4">
                            <p>On the Front End, I had to draw out each individual state on the US map and give them their own ID and data to track which state the user interacted with using Inkscape. In the fact.js file, I had to learn and master ES6 in order to interact with dynamic data. I use Ajax to communicate with the backend on each individual note the user creates.</p>
                        </div>
                    </div>
                    <br></br>
                    <div className="row">
                        <div style={{backgroundColor: "white", border: "solid"}} className="col-5">
                            <p>With the Back End, we used MySQL and Sequelize as our ORM. Being our first time with this implementing a Full Stack Applicaiton, the Back End cause a lot of issues and hardships. We found that using Sequelize on such a small application was not practical; however, once we got the ORM working, it opened a lot of possibilites that we wanted to implement in our application. This application allows for reads, creates, and deletes of the user notes.</p>
                            <br></br>
                            <h3>Checkout our the application: <a target="_blank" href="https://roadtrip-planner-app.herokuapp.com/">RoadTrip Planner</a></h3>
                            <br></br>
                            <h4><a target="_blank" href="https://github.com/efolenta/roadtrip-planner">Github Repository</a></h4>
                        </div>
                        <div className="col-7">
                            <img style={{maxWidth: "100%"}} src={Picture2} />   
                        </div>
                    </div>
                </div> 
            <br></br>
            <br></br>
            <br></br>
                <div className="container">
                    <div style={{backgroundColor: "white", border: "solid"}} className="row">
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
            </div>
           
        </>
    )
}

export default RoadmapContent