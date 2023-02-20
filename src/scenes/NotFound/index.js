import React from 'react';
import Error from './error.png'
import Navbar from '../Navbar';
import Button from "@material-ui/core/Button";
import "./style.css";

export default function Home() 
{
  return (
    <div className="home-page">
        <nav className="nav">
        <ul className="nav-list">
          </ul>
        </nav>
        <main>
            <table>
                <tr>
                    <td>
                        <img src={Error}></img>
                    </td>
                    <td>
                        <h1 className="title" style={{fontSize: "70px"}}> ERROR 404 </h1>
                        <p className="description">The requested page does not exist </p>   
                    </td>
                </tr>
            </table>
        </main>
    </div>
  );
}

