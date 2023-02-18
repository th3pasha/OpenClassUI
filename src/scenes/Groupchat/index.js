import { useState } from "react";
import React from 'react';
import AuthPage from "./Auth";
import ChatsPage from "./Chat";

function GroupChat() 
{
  const [user, setUser] = useState();

  if (!user) 
  {
    return <AuthPage onAuth={(user) => setUser(user)} />;
  } 
  else
  {
    return <ChatsPage user={user} />;
  }
}

export default GroupChat;
