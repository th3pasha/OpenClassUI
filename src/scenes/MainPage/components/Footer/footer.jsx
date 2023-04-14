import React from 'react';
import "./footerstyle.css"

const Footer = () =>{
    return(
        <div className="footer">
        <div className="top">
            <div>
                <h1>OpenClass</h1>
                <p>new ways of learning</p>
            </div>
            <div>
                <a href="/">
                    <i className="fa-brands fa-facebook-square"></i>
                </a>
                <a href="/">
                    <i className="fa-brands fa-instagram-square"></i>
                </a>
                <a href="/">
                    <i className="fa-brands fa-github-square"></i>
                </a>
                <a href="/">
                    <i className="fa-brands fa-twitter-square"></i>
                </a>
            </div>
        </div>

        <div class="bottom">
            <div>
            <h4>Project</h4>
            <a href="/">Changelog</a>
            <a href="/">Status</a>
            <a href="/">Licence</a>
            <a href="/">All versions</a>
            </div>
            <div>
            <h4>Community</h4>
            <a href="/">Github</a>
            <a href="/">Issues</a>
            <a href="/">twitter</a>
            <a href="/">Project</a>
            </div>
            <div>
            <h4>Help</h4>
            <a href="/">Support</a>
            <a href="/">Troubleshooting</a>
            <a href="/">Contact Us</a>
            </div>
            <div>
            <h4>Others</h4>
            <a href="/">Terms of Service</a>
            <a href="/">Privacy Policy</a>
            </div>
        </div>
        </div>
    )
}

export default Footer