import React from "react";
import logo from "./logo.svg";
import Login from "./components/login";
import SignUp from "./components/signup";

import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <SignUp />
    </div>
  );
}

export default App;
