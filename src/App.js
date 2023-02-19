import React from "react";
import Main from "./scenes/Main";
import Login from "./scenes/Login";
import Register from "./scenes/Register";
import Navbar from "./scenes/Navbar";
import {Route, Routes, BrowserRouter} from "react-router-dom";
import GroupChat from "./scenes/Groupchat";
import Home from "./scenes/Home";

function App() 
{

  return (
   <div className="App" style={{backgroundColor : "rgb(40,43,54)"}}>
      <div>
        <BrowserRouter>
            <Routes>
                  <Route exact path = "/" element = {<Main/>}></Route>
                  <Route path = "/login" element = {<Login/>}></Route>
                  <Route path = "/register" element = {<Register/>}></Route>
                  <Route path = "/navbar" element = {<Navbar/>}></Route>
                  <Route path = "/home" element = {<Home/>}></Route>
                  <Route path = "/groupchat" element ={<GroupChat/>}></Route>             
            </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}
export default App;
