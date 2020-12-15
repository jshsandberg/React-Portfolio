import React from "react";
import ShelfContent from "../components/ShelfContent/ShelfContent"
import NavBar from "../components/WelcomeNavBar/index";

function ShelfPage() {
    return (
        <div>
            <NavBar></NavBar>
            <ShelfContent></ShelfContent>
        </div>
    )
};

export default ShelfPage