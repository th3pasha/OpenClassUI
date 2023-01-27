import React from "react";
import "./App.css";
import EmailForm from "./components/EmailForm";
import SignUpForm from "./components/SignUpForm";

function App() 
{
  return (
      <div style={{ backgroundColor: "#36393F", minHeight: "100vh" }} className="App">
        <div>
          <SignUpForm/>
        </div>
          
     </div>
  );
}

export default App;
