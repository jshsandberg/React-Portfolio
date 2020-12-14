import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import Seattle from "../../utils/RoadmapPictures/Seatlle.gif";
import NewYork from "../../utils/RoadmapPictures/NewYork.gif"
import SanFrancisco from "../../utils/RoadmapPictures/SanFrancisco.gif"
import "./style.css"

function RoadmapHolder() {

    const [landmark, setLandmark] = useState(Seattle)

    useEffect(() => {
        let landmarkIndex = landmarks[Math.floor(Math.random() * landmarks.length)];
        setLandmark(landmarkIndex)
    },[])

    const landmarks = [Seattle, NewYork, SanFrancisco]


    

    const style = {
        backgroundImage: `url()`
    }

   
    
    return (

    <Link to="/roadmap">
        <div className="container">
            <div className="container roadBorder">
                <div className="row">
                    <div className="col-5">
                        <img className="landmark" alt={landmark} src={landmark}></img>
                    </div>
                    <div className="col-7 roadtrip">
                        <h1 style={{fontSize: "500%"}}>RoadTrip Planner</h1>
                    </div>
                </div>
            </div>
        </div>
    </Link>
    )
}

export default RoadmapHolder