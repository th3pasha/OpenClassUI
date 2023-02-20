import React, { useContext, useState } from 'react';
import { Button } from '@mui/material';
import StudentInfo from '../../components/StudentInfo';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import "./navbar.css";



export default function Home() 
{
    const [user, setUser] = useState('');
    const cookies = new Cookies();
    const navigate = useNavigate();

    const SignOut = () => 
    {
        setUser(null);
        cookies.remove('token');
        cookies.remove('userid');
        navigate("/");
    } 

  return (
    <div className="home-page">
      <nav className="nav">
        <ul className="nav-list">
            <li className="nav-item">
              <Button href="/home">Home</Button>
            </li>
            <li className="nav-item">
              <Button href="/class">Class</Button>
            </li>
            <li className="nav-item">
              <Button href="/assignment">Assignment</Button>
            </li>
            <li className="nav-item">
              <Button href="/groupchat">GroupChat</Button>
            </li>
          </ul>
          <ul className="nav-list nav-list-right">
            <li className="nav-item">
              <Button href = "/account" className="sign-in-button">My Account</Button>
            </li>
            <li className="nav-item">
              <Button onClick={SignOut} variant = "outlined">LOG OUT</Button>
            </li>
          </ul>
        </nav>
        <main>
            <StudentInfo/>   
        </main>
    </div>
  );
}

