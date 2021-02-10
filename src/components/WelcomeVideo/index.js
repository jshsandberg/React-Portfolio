import React, { useState, useEffect } from "react";
import Trees from "../../utils/trees.gif"
import ImageFadeIn from "react-image-fade-in";
import Statue from "../../utils/SpinningStatue.gif"
import Polygon from "../../utils/polygon.gif"
import CyberPunk from "../../utils/CyberPunk.gif"
import Rebooting from "../../utils/Rebooting.gif"
import "./style.css"


function WelcomeVideo() {
    
    
    const [img, setImg] = useState([Trees, Statue, Polygon, CyberPunk])
    const [count , setCount] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(count => count + 1);
          }, 6000);
          if (count > 3) {
            setCount(0)
        }
          return () => clearInterval(interval);
    
        }, [count]);




    return (
        <div>
            <div className="container space">
                <ImageFadeIn opacityTransition={10} src={img[count]}/>
            </div>
        </div>
    );
}

export default WelcomeVideo