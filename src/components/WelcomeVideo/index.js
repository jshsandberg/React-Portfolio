import React, { useState, useEffect } from "react";
import Trees from "../../utils/trees.gif"
import ImageFadeIn from "react-image-fade-in";
import Statue from "../../utils/SpinningStatue.gif"
import Polygon from "../../utils/polygon.gif"
import CyberPunk from "../../utils/CyberPunk.gif"
import Rebooting from "../../utils/Rebooting.gif"
import "./style.css"


function WelcomeVideo() {
    
    
    const [Img, setImg] = useState(Trees);

    // useEffect(() => {
    //     console.log("did mount")
    // },[Img])

    const time = () => setInterval(swapImg, 7000);

  

    const reboot = () => setInterval(rebootImg, 60000);
        
    const rebootImg = () => {
        setImg(Rebooting)
    }



    const swapImg = () => {
        if (Img === Trees) {
            setImg(Statue)
        } else if (Img === Statue) {
            setImg(Polygon)
        } else if (Img === Polygon) {
            setImg(CyberPunk)
        } else {
            setImg(Trees)
        }
    }

    time();
    reboot();



    return (
        <div>
            <div className="container space">
                {<ImageFadeIn opacityTransition={10} src={Img}/>}
            </div>
        </div>
    );
}

export default WelcomeVideo