import React from 'react';
import HomePage from '../Home/HomePage';
import Cookies from 'universal-cookie';
import Login from '../Login';
import { useNavigate } from "react-router-dom";

export default function Home() 
{
  const cookies = new Cookies();
  const navigate = useNavigate();
  const id = cookies.get('userid');
  console.log(id);

  if (id === undefined) 
  {
    return <Login/>;

  } 
  else
  {
    return <HomePage/>;
  }
}