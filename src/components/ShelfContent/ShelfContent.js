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

    const landmarks = [Seattle, NewYork, SanFrancisco]




    return (
        <>
        <br></br>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-2">
                        
                    </div>
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
                                    <img class="d-block w-100" src={Update} alt="First slide" />
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block w-100" src={Welcome} alt="Second slide" />
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block w-100" src={Inventory} alt="Third slide" />
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block w-100" src={Signup} alt="Fourth slide" />
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block w-100" src={Signin} alt="Fifth slide" />
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block w-100" src={Form} alt="Sixth slide" />
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
                    <div className="col-2">

                    </div>
                </div>
                <br></br>
                <br></br>
                <div style={{backgroundColor: "lightgray"}} className="row">
                    <div className="col-1">

                    </div>
                    <div className="col-10">
                        <br></br>
                    <p>Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph. A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph. For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long. Ultimately, a paragraph is a sentence or group of sentences that support one main idea. In this handout, we will refer to this as the “controlling idea,” because it controls what happens in the rest of the paragraph.

                        How do I decide what to put in a paragraph?
                        Before you can begin to determine what the composition of a particular paragraph will be, you must first decide on an argument and a working thesis statement for your paper. What is the most important idea that you are trying to convey to your reader? The information in each paragraph must be related to that idea. In other words, your paragraphs should remind your reader that there is a recurrent relationship between your thesis and the information in each paragraph. A working thesis functions like a seed from which your paper, and your ideas, will grow. The whole process is an organic one—a natural progression from a seed to a full-blown paper where there are direct, familial relationships between all of the ideas in the paper.

                        The decision about what to put into your paragraphs begins with the germination of a seed of ideas; this “germination proc</p>
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