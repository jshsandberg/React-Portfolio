import React from "react";
import Linkedin from "../../utils/ContactPictures/Linkedin.png";
import Github from "../../utils/ContactPictures/Github.png";
import Gmail from "../../utils/ContactPictures/Gmail.png";

function ContactContent() {

    const faviconStyle = {
        maxWidth: "50%",
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <br></br>
                        <br></br>
                        <a target="_blank" href="https://www.linkedin.com/in/jshsandberg/" ><img style={faviconStyle} alt={Linkedin} src={Linkedin}></img></a>
                        <br></br>
                        <br></br>
                        <a target="_blank" href="https://github.com/jshsandberg"><img style={faviconStyle} alt={Github} src={Github}></img></a>
                        <br></br>
                        <br></br>
                        <a target="_blank" href="mailto: jshsandberg@gmail.com"><img style={faviconStyle} alt={Gmail} src={Gmail}></img></a>
                    </div>
                    <div className="col-8">
                        <br></br>
                        <br></br>
                        <p>
                            In these troubling times, I have found myself hungry and determined. Before Covid-19, I was working with 24 Hour Fitness. I started out as a trainer and worked my way up to Assistant General Manager. Unfortunately, with the shutdowns happening, I decided to take the biggest challenge that I ultimately believe would set me on the right path to happiness and fulfillment. Enrolling in the University of California Irvine Coding Bootcamp has been challenging but extremely rewarding. Spending 30+ hours (while working a full time job when the state was not shut down) on ajax calls, server-side development, UI interface, Debugging, and algorithms/ data structures has been exhausting, yet so satisfying. Never have I ever had the biggest smile when learning new concepts and problem solving certain issues. This work is both heavenly and evil, and I would not want it any other way. The confidence I have achieved while completing this bootcamp has made me realize I am ready to take on an entry level job with Web Development. Excited and eager to bring the skills I have learned as a manager and team player to my future employer as a Full Stack Web Developer. The qualities I can offer to my future employer are plentiful, being a determined individual and having the skill to create anything; I know I can help contribute to the success and longevity of any company
                        </p>
                    </div>
                </div>
            </div>
        </>
    )

}

export default ContactContent