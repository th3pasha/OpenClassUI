import React from 'react';
import { Button } from '@mui/material';
import Cookies from 'universal-cookie';
import Home from '../Home';
import { useNavigate } from "react-router-dom";
import "./main.css";

export default function Main() 
{
  const cookies = new Cookies();
  const navigate = useNavigate();
  const id = cookies.get('userid');
  console.log(id);

  if(id === undefined)
  return (
    <div className="home-page">
      <nav className="nav">
        <ul className="nav-list">
            <li className="nav-item">
              <Button href="/home">Home</Button>
            </li>
            <li className="nav-item">
              <Button href="/classes">Classes</Button>
            </li>
            <li className="nav-item">
              <Button href="/about">About</Button>
            </li>
            <li className="nav-item">
              <Button href="/contact">Contact</Button>
            </li>
          </ul>
          <ul className="nav-list nav-list-right">
            <li className="nav-item">
              <Button href = "/login" className="sign-in-button">Sign In</Button>
            </li>
            <li className="nav-item">
              <Button href ="/register" variant = "outlined">REGISTER</Button>
            </li>
          </ul>
        </nav>
      <main className="main">
        <h1 className="title" style={{fontSize: "70px"}}>Welcome to OpenClass</h1>
        <p className="description">Discover new ways of learning and achieving your goals</p>
        <button className="explore-button">Explore Classes</button>
      </main>
      <footer className="footer">
        <p className="copyright">Copyright &copy; 2023 OpenClass</p>
      </footer>
      </div>
  );
  else return <Home/>;
}
