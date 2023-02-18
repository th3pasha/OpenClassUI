import React from "react";
import "./App.css";
import Main from "./scenes/Main";
import Login from "./scenes/Login";
import Register from "./scenes/Register";
import Update from "./scenes/UpdateInfo";
import { useState } from "react";
import Navbar from "./scenes/Navbar";
import {Route, Routes, BrowserRouter} from "react-router-dom";
import GroupChat from "./scenes/Groupchat";

function App() 
{

  const [user, setUser] = useState();

  return (
   <div className="App">
      <div>
        <BrowserRouter>
            <Routes>
                  <Route exact path = "/" element = {<Main/>}></Route>
                  <Route path = "/login" element = {<Login/>}></Route>
                  <Route path = "/register" element = {<Register/>}></Route>
                  <Route path = "/register/update" element = {<Update/>}></Route>
                  <Route path = "/navbar" element = {<Navbar/>}></Route>
                  <Route path = "/groupchat" element ={<GroupChat/>}></Route>             
            </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}
export default App;
