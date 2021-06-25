import React from "react";
import Carousel from "../Carousel/Carousel";
import "./Inventory.css"

export default function Inventory() {

    return (
        <div className="inventoryHolder">
            <div className="carouselHolder">
                <Carousel />
            </div>
            <div className="inventoryText">
                <p>Shelf Keeper is our latest applicaiton and the one I am most proud of. It is MERN stack application. It uses multiple technologies and packages. It is deployed and ready to be used as of now; however, we have some features disabled now that we would like to add to in the future. Those features can be seen in the applicaiton; however, we have greyed out the buttons to show that they are not enabled but are being worked on as we speak. Shelf Keeper is an inventory tracking application. It keeps track of each individual business a user may have and the inventory that business may have. A user can add, update, and delete their inventory as they see fit. This application also allows the user to keep track of their inventory's financal information.</p>
            </div>
        </div>
    )
}