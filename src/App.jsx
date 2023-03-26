import React, { lazy } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import './App.css';

const Main = lazy(() => import("./scenes/Main"));
const Login = lazy(() => import("./scenes/Login"));
const Register = lazy(() => import("./scenes/Register"));
const Home = lazy(() => import("./scenes/Home"));
const NotFound = lazy(() => import("./scenes/NotFound"));
const Account = lazy(() => import('./scenes/Account'));
const OpenChat = lazy(() => import("./scenes/Openchat"));

function App() {

  return (
    <div className="App" style={{ backgroundColor: "rgb(40,43,54)", fontFamily:'JetBrains Mono' }}>
      <div>
        <BrowserRouter>
          <Routes>
            <Route exact path="/"   element={<Main />}></Route>
            <Route path='*'         element={<NotFound />} />
            <Route path="/login"    element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/home"     element={<Home />}></Route>
            <Route path="/openchat" element={<OpenChat />}></Route>
            <Route path='/account'  element={<Account />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}
export default App;
