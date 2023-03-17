import React, { useEffect, useState } from 'react'
import { PrettyChatWindow } from "react-chat-engine-pretty";
import axios from 'axios';
import Sidebar from '../../components/SideBar';
import Cookies from 'universal-cookie';
import './chat.css';

export default function OpenChat() {
  const cookies = new Cookies();
  const id = cookies.get('userid');

  const [username, setUsername] = useState('');
  const [secret, setSecret] = useState('');
  const [isFetched, setFetched] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:8080/v1/auth/student/' + id)
      .then(response => {
        setUsername(response.data.email);
        setSecret(response.data.apogeeNum);
        setFetched(true);
      })
      .catch(error => {console.error(error); setFetched(false)});
  }, []);

  return (
    <div>
      {isFetched ? ( <div style={{ fontFamily: 'JetBrains Mono' }}>
      <div className='chatwindow'>
        <PrettyChatWindow
          projectId="019c8371-81b8-4f7e-aa96-e82e91b2d06f"
          username={username}
          secret={secret}
          style={{ height: "100%", fontFamily: "JetBrains Mono" }}
          height='100vh'
        />
      </div>
      <div className='sidebar'>
        <Sidebar />
      </div>
    </div>): (null)}
    </div>
   
  );
};
