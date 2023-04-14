import React from 'react';
import "./HeroStyle.css";


function Hero(props) {
    return(
        <>
        <div className={props.cName}>
            <img alt="Heroimg" src={props.HeroImg}/>
        </div>

        <div className="HeroTxt">
            <h1> {props.title} </h1>
            <p>
                {props.txt}
            </p>
            <a href={props.url} className={props.ButtonClass}>
                {props.ButtonTxt}
            </a>
        </div>
        </>
        
    )
}

export default Hero;