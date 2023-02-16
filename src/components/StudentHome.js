import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import "./HomePage.css";

export default function Home() {
  

  return (
    <div className="home-page">
      <header className="header">
        <nav className="nav">
        <ul className="nav-list">
            <li className="nav-item">
              <a href="#">Home</a>
            </li>
            <li className="nav-item">
              <a href="#">Courses</a>
            </li>
            <li className="nav-item">
              <a href="#">About</a>
            </li>
            <li className="nav-item">
              <a href="#">Contact</a>
            </li>
          </ul>
          <ul className="nav-list nav-list-right">
            <li className="nav-item">
              <a href="/EmailForm">Sign In</a>
            </li>
            <li className="nav-item">
            <button className="sign-in-button">Sign in</button>
            </li>
          </ul>
        </nav>
      </header>
      <main className="main">
        <h1 className="title">Welcome to OpenClass</h1>
        <p className="description">Discover new ways of learning and achieving your goals</p>
        <button className="explore-button">Explore Classes</button>
      </main>
      <footer className="footer">
        <p className="copyright">Copyright &copy; 2023 OpenClass</p>
      </footer>
    </div>
  );
}

