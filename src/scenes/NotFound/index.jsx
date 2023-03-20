import React from 'react';
import Error from './error.png'
import Button from "@material-ui/core/Button";

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
                </tr>
                <tr>
                    <td>
                        <h1 className="title" style={{fontSize: "70px" , color:"#3f51b5"}}> ERROR 404 </h1>
                        <p className="description" style={{ color:"#3f51b5"}}>The requested page does not exist </p>   
                    </td>
                </tr>
            </table>
        </main>
    </div>
  );
}

