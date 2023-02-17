import React, { useContext, useState } from 'react';
import { Button } from '@mui/material';
import "./style.css";
import { useNavigate } from 'react-router-dom';

export default function Home() 
{
    const user = useState('');
    const navigate = useNavigate();

  return (
    <div className="home-page">
      <header className="header">
        <nav className="nav">
        <ul className="nav-list">
            <li className="nav-item">
              <Button href="#">Home</Button>
            </li>
            <li className="nav-item">
              <Button href="#">Class</Button>
            </li>
            <li className="nav-item">
              <Button href="#">Assignment</Button>
            </li>
            <li className="nav-item">
              <Button href="#">GroupChat</Button>
            </li>
          </ul>
          <ul className="nav-list nav-list-right">
            <li className="nav-item">
              <Button href = "/login" className="sign-in-button">My Account</Button>
            </li>
            <li className="nav-item">
              <Button href ="/register" variant = "outlined">LOG OUT</Button>
            </li>
          </ul>
        </nav>
      </header>
      <main className="main">
        <h1 className="title">Welcome to OpenClass</h1>
        <p className="description">Signed in as {user}</p>
      </main>
      <footer className="footer">
        <p className="copyright">Copyright &copy; 2023 OpenClass</p>
      </footer>
    </div>
  );
}

