import React from "react";
import Footer from "./Footer";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <Footer />
      </div>
    </div>
  );
}

export default App;
