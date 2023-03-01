import React from 'react'
import { PrettyChatWindow } from "react-chat-engine-pretty";
import './chat.css';

const ChatsPage = (props) => {
  return (
      <div style={{ fontFamily: 'JetBrains Mono', height: "100vh", width: "100vw" }}>
        <PrettyChatWindow
          projectId="1e32be80-7c8b-47bb-9d8c-1b079b307dcd"
          username={props.user.username} // adam
          secret={props.user.secret} // pass1234
          style={{ height: "100%", fontFamily:"JetBrains Mono"}}
          height='100vh'
        />
      </div>
  );
};

export default ChatsPage;