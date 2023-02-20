import { useState } from "react";
import React from 'react';
import HomePage from '../Home/HomePage';
import Login from '../Login';

function GroupChat() 
{
  const [user, setUser] = useState();

  if (user) 
  {
    return <Login onAuth={(user) => setUser(user)} />;
  } 
  else
  {
    return <HomePage user={user} />;
  }
}

export default GroupChat;
