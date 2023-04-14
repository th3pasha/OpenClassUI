import React from 'react';
import Dest from "../components/Destination/Dest";
import Hero from "../components/hero/Hero"
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/footer"

function Home() {
    return(
        <>
        <Navbar />
            <Hero
            cName="Hero"
            HeroImg="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
            title="Welcome To OpenClass"
            txt="Discover new ways of learning and achieving your goals"
            ButtonTxt="Explore Classes"
            url="/"
            ButtonClass="show"
            />
            <Dest />
            <Footer />
        </>
        
    )
}

export default Home;