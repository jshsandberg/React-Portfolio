import React from "react";
import WelcomeNavBar from "../components/WelcomeNavBar/index";
import WelcomeText from "../components/WelcomeText";
import WelcomeVideo from "../components/WelcomeVideo/index";


function WelcomePage() {

    const reset = () => setInterval(windowReload, 62000);

    const windowReload = () => {
        window.location.reload()
    }

    reset();

    return (
        <div>
            <WelcomeNavBar></WelcomeNavBar>
            <WelcomeVideo></WelcomeVideo>
            <WelcomeText></WelcomeText>
        </div>
    )
}; export default WelcomePage