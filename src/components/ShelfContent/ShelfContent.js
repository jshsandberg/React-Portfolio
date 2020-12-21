import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Signin from "../../utils/InventoryPictures/signin.png";
import Signup from "../../utils/InventoryPictures/Signup.png";
import Update from "../../utils/InventoryPictures/Update.png";
import Welcome from "../../utils/InventoryPictures/Welcome.png";
import Inventory from "../../utils/InventoryPictures/Inventory.png";
import Form from "../../utils/InventoryPictures/Form.png";
import Pikachu from "../../utils/Pikachu.gif";
import Seattle from "../../utils/RoadmapPictures/Seatlle.gif";
import NewYork from "../../utils/RoadmapPictures/NewYork.gif";
import SanFrancisco from "../../utils/RoadmapPictures/SanFrancisco.gif";
import Logo from "../../utils/InventoryPictures/logo.png";
import Recipe from "../../utils/RecipePictures/Recipe.png";

function ShelfContent() {

    const [landmark, setLandmark] = useState(Seattle)

    useEffect(() => {
        let landmarkIndex = landmarks[Math.floor(Math.random() * landmarks.length)];
        setLandmark(landmarkIndex)
    },[])

    const landmarks = [Seattle, NewYork, SanFrancisco];

    const techCol = {
        backgroundColor: "lightgray",
        paddingTop: "30px",
        paddingRight: "30px",
        paddingLeft: "30px",
        paddingBottom: "30px",
        marginTop: "75px",
    }




    return (
        <>
        <br></br>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-8">
                        <div id="carouselExampleIndicators" class="carousel slide" data-interval="0">
                            <ol class="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
                            </ol>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img class="d-block w-100" src={Welcome} alt="First slide" />
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block w-100" src={Signup} alt="Second slide" />
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block w-100" src={Signin} alt="Third slide" />
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block w-100" src={Inventory} alt="Fourth slide" />
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block w-100" src={Form} alt="Fifth slide" />
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block w-100" src={Update} alt="Sixth slide" />
                                </div>
                            </div>
                            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="row" style={techCol}>
                            <p>
                                Technologies used in Shelf Keeper:
                                <br></br>
                                <br></br>
                                Axios / Bcrypt / Express / Express-jwt / JsonWebToken / Mongooes / Path 
                                <br></br>
                                <br></br>
                                Responsibilites for the project:
                                <br></br>
                                <br></br>
                                Create the Inventory Page. Create the Inventory Form Page. Create the password authenticatation  and JsonWebTokens. Backend for the Inventory and Users. Create the CRUD for the application for the Inventory.
                            </p>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div style={{textAlign: "center", paddingTop: "30px"}}>
                                    <h1><a target="_blank" href="https://shelf-keeper-jshsandberg.herokuapp.com/">Shelf Keeper</a></h1>
                                    <br></br>
                                    <h4><a target="_blank" href="https://github.com/jshsandberg/Inventory">Github Repository</a></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
                <br></br>
                <div style={{backgroundColor: "lightgray"}} className="row">
                    <div className="col-1">

                    </div>
                    <div className="col-10">
                        <br></br>
                        <p>Shelf Keeper is our latest applicaiton and the one I am most proud of. It is MERN stack application. It uses multiple technologies and packages. It is deployed and ready to be used as of now; however, we have some features disabled now that we would like to add to in the future. Those features can be seen in the applicaiton; however, we have greyed out the buttons to show that they are not enabled but are being worked on as we speak. 
                        <br></br>
                        <br></br>
                        Shelf Keeper is an inventory tracking application. It keeps track of each individual business a user may have and the inventory that business may have. A user can add, update, and delete their inventory as they see fit. This application also allows the user to keep track of their inventory's financal information. 
                        </p>
                        <br></br>
                    </div>
                    <div className="col-1">

                    </div>
                </div>
            </div>
            <br></br>
            <br></br>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Link to="roadmap"><img style={{width: "78%", paddingTop: "35px"}} src={landmark}></img></Link>
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

export default ShelfContent