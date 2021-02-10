import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Pokedex1 from "../../utils/PokedexPictures/Pokedex1.png"
import Pokedex2 from "../../utils/PokedexPictures/Pokedex2.png"
import Pokedex3 from "../../utils/PokedexPictures/Pokedex3.png"
import ImageFadeIn from "react-image-fade-in";
import Seattle from "../../utils/RoadmapPictures/Seatlle.gif";
import NewYork from "../../utils/RoadmapPictures/NewYork.gif"
import SanFrancisco from "../../utils/RoadmapPictures/SanFrancisco.gif"
import Line from "../../utils/PokedexPictures/hr.jpg"
import Recipe from "../../utils/RecipePictures/Recipe.png";
import Logo from "../../utils/InventoryPictures/logo.png";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import "./style.css"
import Pokedex4 from "../../utils/PokedexPictures/Pokedex4.png";
import Pokedex5 from "../../utils/PokedexPictures/Pokedex5.png";
import Pokedex6 from "../../utils/PokedexPictures/Pokedex6.png";




function PokemonPictures() {


    const [landmark, setLandmark] = useState(Seattle)

    useEffect(() => {
        let landmarkIndex = landmarks[Math.floor(Math.random() * landmarks.length)];
        setLandmark(landmarkIndex)
    },[])

    const landmarks = [Seattle, NewYork, SanFrancisco]

    const pokemonStyle = {
        fontFamily: "Latos",
        paddingTop: "85px"
    }


    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-7">
                        <div style={{borderStyle: "solid"}} className="container">
                            <div className="row">
                                <div className="col">
                                    <ImageFadeIn opacityTransition={7} className="pokedex1 img-fluid" src={Pokedex1} alt={Pokedex1} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <ImageFadeIn opacityTransition={5} className="pokedex2 img-fluid" src={Pokedex2}alt={Pokedex2} />
                                </div>
                                <div className="col">
                                    <ImageFadeIn opacityTransition={2} className="pokedex3 img-fluid" src={Pokedex3}alt={Pokedex3} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-5">
                        <div>
                            <h5 style={pokemonStyle}>I wanted to find a project that I felt passionate about while still honing my skills with hooks, API's and other techniques. Creating a Pokedex with Gen I Pokemon has been extremely fun while also teaching me better practices. Learning how to plan a project has been a crucial point that I have learned while working on this project. I have gone through multiple versions of this application, thinking I was going to go one way and then realizing that way was either not efficient or just impractical. Still a work in progess; however, I am proud of the technological feat I have accomplished with this project.</h5>
                        </div>
                        <div>
                            <h3>Love for you to check out my work at: <a target="_blank" href="https://jshsandberg.github.io/pokedex">Pokedex</a> </h3>
                            <h4><a target="_blank" href="https://github.com/jshsandberg/pokedex">Github Repository</a></h4>
                            <br></br>
                            <h4>Currently working on a version 2.0 right now. Pokedex 2.0 will be much more polished and have all the regions added to it!</h4>
                        </div>
                    </div>
                </div>
            </div>
           <hr 
                style={{
                    backgroundImage: `url(${Line})`,
                    display: "block",
                    border: 0,
                    height: "75px"
                }}
           />
           <br></br>
           <Container fluid>
               <Row>
                   <Col align="center">
                        <h1>Pokedex Version 2 is now available!</h1>
                        <h4><a target="_blank" href="https://jshsandberg.github.io/pokedex-v2/">Pokedex 2.0</a></h4>
                        <h4><a target="_blank" href="https://github.com/jshsandberg/pokedex-v2">Github</a></h4>
                   </Col>
               </Row>
               <br></br>
                <Row>
                    <Container fluid>
                        <Row>
                            <Col xs={1}>
                            
                            </Col>
                            <Col>
                                <ImageFadeIn className="img-fluid" src={Pokedex5} />
                            </Col>
                            <Col>
                                <ImageFadeIn className="img-fluid" src={Pokedex4}/>
                            </Col>
                            <Col>
                                <ImageFadeIn className="img-fluid" src={Pokedex6}/>
                            </Col>
                            <Col xs={1}>
                            
                            </Col>
                        </Row>
                    </Container>
                </Row>
           </Container>
           <br></br>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Link to="roadmap"><img style={{width: "78%", paddingTop: "35px"}} alt ={landmark} src={landmark}></img></Link>
                    </div>
                    <div className="col">
                        <Link to="/recipe"><img style={{width: "75%"}} className="recipe" alt={Recipe} src={Recipe}></img></Link>
                    </div>
                    <div className="col">
                        <Link to="/shelfkeeper"><img style={{maxWidth: "60%", paddingTop: "58px"}} alt={Logo} src={Logo}></img></Link>
                    </div>
                </div>
            </div>
        </div>
        
    )
};

export default PokemonPictures