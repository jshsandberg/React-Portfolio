import React, { useState} from "react";
import Dog from "../../utils/Dog.jpg";
import Pikachu from "../../utils/Pikachu.gif"
import Charizard from "../../utils/Charizard.gif"
import "./style.css"

function ProjectHolder(props) {

    const [image, setImage] = useState(Dog)
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <img className="pikachu" src={Pikachu}></img>
                </div>
                <div className="col">
                    <img src={image}></img>
                </div>
                <div className="col">
                    <img className="charizard" src={Charizard}></img>
                </div>
            </div>
        </div>
    )
}

export default ProjectHolder