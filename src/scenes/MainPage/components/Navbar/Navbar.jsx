import React from "react";
import "./NavbarStyle.css";
import Logo from '../../assets/logo.png';
import { MenuItems } from "../MenuItems/MenuItems";
import { Link } from "react-router-dom"

function Navbar()  
{
        return(
            <nav className="NavbarItems">
                <h1 className="Navbar-logo"> <img src= {Logo} className='logo'></img> </h1>
                <ul className="nav-menu" >
                    {MenuItems.map((item, index) =>{
                        return (
                            <li key={index} >
                            <Link className={item.cName} to={item.url}>
                            <i className={item.icon}></i>{item.title}
                            </Link>
                            </li>
                        );
                    })}
                    <a href='/login'>                    
                        <button id="login"> Log In</button>
                    </a>
                    <a href='/register'>
                    <button id="signup"> Register</button>
                    </a>
                </ul>
            </nav>
        );
}

export default Navbar;