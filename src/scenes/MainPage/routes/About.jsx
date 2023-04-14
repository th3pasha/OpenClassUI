import React from 'react';
import Hero from "../components/hero/Hero"
import Navbar from "../components/Navbar/Navbar"
import abouti from "../assets/abouti.jpg"


function About(){
    return(
        <>
         <Navbar />
            <Hero
            cName="Hero-ab"
            HeroImg={abouti} 
            title="About"
            ButtonClass="hide"
            />
            <p>
            With OpenClass you can easilly Share your work with your classmates in different formats (Code, Pictures, Text, Videos)
            While being able to see other ClassMates work that they also shared, and interact with it by commenting or liking their Posts
            Plus the freedom of cutomizing your profile picture
            <br />
            Plus the integration of OpenChat you can send private messages to a certain individual or group of students.
            To help you communicate with your classmates in a proffesional way without the trouble of trying to search for their social media
            </p>
        </>
    )
}

export default About;