import { useState } from "react";
import Header from "./components/header";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="container mt-5">
        <h3>Attendance</h3>
        <div className="row">
          <div className="col-3"></div>
          <div className="col-9"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
