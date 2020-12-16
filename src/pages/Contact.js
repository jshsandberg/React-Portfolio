import React from "react";
import JotForm from "react-jotform-embed";
import Navbar from "../components/WelcomeNavBar/index";

function ContactPage() {

    return (
        <>
            <Navbar></Navbar>
            <JotForm src="https://form.jotform.com/203506499223052" />

        </>
    )
}

export default ContactPage