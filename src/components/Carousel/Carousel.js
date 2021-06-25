import React, { useState } from "react";
import { AiFillCaretLeft } from "react-icons/ai"
import { AiFillCaretRight } from "react-icons/ai"
import Form from "../../utils/Inventory/Form.png";
import SignIn from "../../utils/Inventory/signin.png";
import SignUp from "../../utils/Inventory/Signup.png";
import Update from "../../utils/Inventory/Update.png";
import Welcome from "../../utils/Inventory/Welcome.png";
import "./Carousel.css"

export default function Carousel() {

    const images = [Welcome, SignIn, SignUp, Form, Update]
    const [number, setNumber] = useState(0);


    return (
        <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-around"}}>
            <div onClick={() => setNumber(number === 0 ?  4 : number => number - 1)} className="leftArrow">
                <AiFillCaretLeft style={{width: "50px", height: "50px"}} />
            </div>
            <div className="imageHolder">
              <img className="imageInventory" src={images[number]} alt ="carouselImage" />
            </div>
            <div onClick={() => setNumber(number === 4 ? 0 : number => number + 1)} className="rightArrow">
                <AiFillCaretRight style={{width: "50px", height: "50px"}} />
            </div>
        </div>
    )
}