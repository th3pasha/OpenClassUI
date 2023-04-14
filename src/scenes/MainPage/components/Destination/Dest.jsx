import React from 'react';
import homep from "../../assets/homep.png";
import msg from "../../assets/msg.png";
import "./DestStyle.css";
const Dest = () =>{
    return(
        <div className="Dest">
            <h1>What does it look Like ?</h1>
            <p>a preview before you sign up</p>

        <div className="first-dest">
            <div className="dest-txt">
            <h2>An Easier Way to Share your work with Your ClassMates !</h2>
            <p>With OpenClass you can easilly Share your work with your classmates in different formats (Code, Pictures, Text, Videos)
            <br /> While being able to see other ClassMates work that they also shared, and interact with it by commenting or liking their Posts
            <br /> Plus the freedom of cutomizing your profile picture         
                </p>
                
            <div className="img">
                <img alt="imgult" src={homep}/>
            </div>
            </div>

            <div className="dest-txt2">
            <h2>And interact with Students !</h2>
            <p>With the integration of OpenChat you can send private messages to a certain individual or group of students.
            <br /> To help you communicate with your classmates in a proffesional way without the trouble of trying to search for their social media 
                </p>

            <div className="img2">
                <img alt="img2ult" src={msg}/>
            </div>
        </div>
        </div>
        </div>    
        )
}
export default Dest