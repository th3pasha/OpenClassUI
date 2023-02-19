import React from 'react';
import { Button } from '@mui/material';
import "./style.css";

export default function Home() {
  

  return (
    <div className="home-page">
      <nav className="nav">
        <ul className="nav-list">
            <li className="nav-item">
              <Button href="#">Home</Button>
            </li>
            <li className="nav-item">
              <Button href="#">Courses</Button>
            </li>
            <li className="nav-item">
              <Button href="#">About</Button>
            </li>
            <li className="nav-item">
              <Button href="#">Contact</Button>
            </li>
          </ul>
          <ul className="nav-list nav-list-right">
            <li className="nav-item">
              <Button href = "/login" className="sign-in-button">Sign In</Button>
            </li>
            <li className="nav-item">
              <Button href ="/register" variant = "outlined">Sign up</Button>
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
}

