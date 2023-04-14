import React from 'react';
import Hero from "../components/hero/Hero"
import Navbar from "../components/Navbar/Navbar"
import servicei from "../assets/servicei.jpg"

function Service(){
    return(
        <>
        <Navbar />
            <Hero
            cName="Hero-ab"
            HeroImg={servicei} 
            title="Service"
            ButtonClass="hide"
            />
        </>
    )
}

export default Service;