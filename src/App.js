import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import "./App.css"; // Ensure your CSS file is linked correctly

function App() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="container">
      <div className="form-container">
        <div className="title">PuffMaker</div>
        {showLogin ? <Login /> : <Register />}
        <button className="secondary-action" onClick={() => setShowLogin(!showLogin)}>
          {showLogin ? "Need an account? Register" : "Already have an account? Login"}
        </button>
      </div>
    </div>
  );
}

export default App;
