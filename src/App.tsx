import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Home } from "./page/home";

function App() {
  useEffect(() => {
    document.title = "new title";
  }, []);
  return <Home />;
}

export default App;
