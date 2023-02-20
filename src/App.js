import React from "react";
import Main from "./scenes/Main";
import Login from "./scenes/Login";
import Register from "./scenes/Register";
import {Route, Routes, BrowserRouter} from "react-router-dom";
import GroupChat from "./scenes/Groupchat";
import Home from "./scenes/Home";
import NotFound from "./scenes/NotFound";
import './App.css';

function App() 
{

  return (
   <div className="App" style={{backgroundColor : "rgb(40,43,54)"}}>
      <div>
        <BrowserRouter>
            <Routes>
                  <Route exact path = "/" element = {<Main/>}></Route>
                  <Route path='*' element={<NotFound/>}/>
                  <Route path = "/login" element = {<Login/>}></Route>
                  <Route path = "/register" element = {<Register/>}></Route>
                  <Route path = "/home" element = {<Home/>}></Route>
                  <Route path = "/groupchat" element ={<GroupChat/>}></Route>             
            </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}
export default App;
