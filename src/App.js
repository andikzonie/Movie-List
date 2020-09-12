import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes/Routes"
import { NavProvider } from "./Context/NavContext";
import { AuthProvider } from "./Context/AuthContext";

function App() {
  return (
    <Router>
      <AuthProvider>
          <NavProvider>
            <Routes />
          </NavProvider>
        </AuthProvider>
    </Router>
  );
}

export default App;
