import React from "react";
import "./App.css";
import EmailForm from "./components/EmailForm";

function App() 
{
  return (
      <div style={{ backgroundColor: "#36393F", minHeight: "100vh" }} className="App">
        <div>
          <EmailForm/>
        </div>
          
     </div>
  );
}

export default App;
