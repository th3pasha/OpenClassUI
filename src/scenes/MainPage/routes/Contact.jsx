import React from 'react';
import Hero from "../components/hero/Hero"
import Navbar from "../components/Navbar/Navbar"
import contacti from "../assets/contacti.jpg"

function Contact(){
    return(
        <>
        <Navbar />
            <Hero
            cName="Hero-ab"
            HeroImg={contacti} 
            title="Contact"
            ButtonClass="hide"
            />
        </>
    )
}

export default Contact;