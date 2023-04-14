import React, { lazy } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import './App.css';

const Main = lazy(() => import("./scenes/MainPage/routes/Home"));
const Login = lazy(() => import("./scenes/Login"));
const Register = lazy(() => import("./scenes/Register"));
const Home = lazy(() => import("./scenes/Home"));
const NotFound = lazy(() => import("./scenes/NotFound"));
const Account = lazy(() => import('./scenes/Account'));
const OpenChat = lazy(() => import("./scenes/Openchat"));

const About = lazy(() => import("./scenes/MainPage/routes/About"));
const Service = lazy(() => import("./scenes/MainPage/routes/Service"));
const Contact = lazy(() => import("./scenes/MainPage/routes/Contact"));

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

            <Route path="/about" element={<About/>}/>
            <Route path="/service" element={<Service/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}
export default App;
