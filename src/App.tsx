import React, { useEffect } from "react";
import { Home } from "./page/home";

function App() {
  useEffect(() => {
    document.title = "new title";
  }, []);
  return <Home />;
}

export default App;
