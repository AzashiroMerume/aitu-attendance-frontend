import { useState } from "react";
import Header from "./components/Header";
import Filters from "./components/Filters";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <main>
        <div className="container-fluid mt-5">
          <h1>Attendance</h1>
          <div className="row mt-4">
            <div className="filters-outside">
              <div className="content-inner shadow-sm bg-white">
                <div className="p-3">
                  <h3>Filters</h3>
                  <Filters></Filters>
                </div>
              </div>
            </div>
            <div className="content-outside">
              <div className="content-inner shadow-sm bg-white">
                <div className="p-3 content-main">
                  <input
                    placeholder="Поиск по ФИО"
                    className="content-input"
                    type="text"
                  ></input>
                </div>
                <hr className="feature-divider" />
                <div className="content-main px-3">
                  <div className="row align-content-center justify-content-center">
                    <div className="col-12">
                      <h5>Someone someone</h5>
                      <p className="text-secondary">Someone someone</p>
                    </div>
                  </div>
                </div>
                <div className="content-pagination"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
