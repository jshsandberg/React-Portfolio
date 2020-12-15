import React from "react";
import { Link } from "react-router-dom";
import video from "../../utils/Video/production_ID_4281239.mp4";
import Logo from "../../utils/InventoryPictures/logo.png";

function shelfHolder() {
    return (
        <>
        
                    <Link to="/shelfkeeper">
                    <div className="container">
                        <div className="row"> 
                            <div className="col-7">
                                <div className="overlay"></div>
                                    <video style={{maxWidth: "100%", height: "350px"}} playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
                                        <source src={video} type="video/mp4" />
                                    </video>
                            </div>
                            <div className="col">
                                <img style={{maxWidth: "60%", paddingTop: "30px"}} src={Logo} />
                                <h1 style={{textAlign: "center", paddingTop: "30px"}} >Shelfkeeper</h1>
                            </div>
                        </div>
                    </div>
                    </Link>
        </>
    )
}

export default shelfHolder