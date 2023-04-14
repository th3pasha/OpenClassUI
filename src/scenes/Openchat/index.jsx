import React, { useEffect, useState } from 'react'
import { PrettyChatWindow } from "react-chat-engine-pretty";
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import Sidebar from '../../components/SideBar';
import Cookies from 'universal-cookie';
import './chat.css';
import { linkClasses } from '@mui/material';

const useStyles = makeStyles((theme) => ({

    chatwindow:
    {
      position: 'relative',
      fontFamily: 'JetBrains Mono',
      left: '5vh',
    },
}));


export default function OpenChat() {

  const classes = useStyles();
  const cookies = new Cookies();
  const id = cookies.get('userid');
  const [username, setUsername] = useState('');
  const [secret, setSecret] = useState('');
  const [isFetched, setFetched] = useState(false);

  const fetchStudent = async () => {
    await axios.get('http://localhost:8080/v1/auth/student/' + id)
      .then(response => {
        setUsername(response.data.email);
        setSecret(response.data.apogeeNum);
        setFetched(true);
      })
      .catch(error => { console.error(error); setFetched(false) });
  }

  useEffect(() => {
    fetchStudent();
  }, []);

  return (
    <div>
      {isFetched ? (<div style={{ fontFamily: 'JetBrains Mono' }}>
        <div className={classes.chatwindow} >
          <PrettyChatWindow
            projectId="2ff35100-423f-4f0f-94db-babf3392b8d9"
            username={username}
            secret={secret}
            height='100vh'
          />
        </div>
        <div className='sidebar'>
          <Sidebar />
        </div>
      </div>) : (null)}
    </div>

  );
};
