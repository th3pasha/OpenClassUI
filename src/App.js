import React, { lazy } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import './App.css';

const Main = lazy(() => import("./scenes/Main"));
const GroupChat = lazy(() => import("./scenes/Groupchat"));
const Login = lazy(() => import("./scenes/Login"));
const Register = lazy(() => import("./scenes/Register"));
const Home = lazy(() => import("./scenes/Home"));
const NotFound = lazy(() => import("./scenes/NotFound"));
const Feed = lazy(() => import("./components/Feed"));

const Students = lazy(() => import("./components/Students"));

function App() {
  return (
    <div className="App" style={{ backgroundColor: "rgb(40,43,54)" }}>
      <div>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Main/>}></Route>
            <Route path='*' element={<NotFound/>} />
            <Route path="/login" element={<Login/>}></Route>
            <Route path = '/feed' element={<Feed/>}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/groupchat" element={<GroupChat />}></Route>

            <Route path="/students" element={<Students/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}
export default App;
