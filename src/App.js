import React from "react";
import "./App.css";
import EmailForm from "./components/EmailForm";
import Home from "./components/Home";
import SignUpForm from "./components/SignUpForm";

function App() 
{
  return (
      <div style={{ backgroundColor: "#36393F", minHeight: "100vh" }} className="App">
        <div>
          <Home/>
        </div>
     </div>
  );
}
export default App;
