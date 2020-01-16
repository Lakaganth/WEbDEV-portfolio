import React from "react";
import LazyLoad from "react-lazyload";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

// Components
import { Navbar } from "./components/navbar/Navbar";
import { HeroComp } from "./components/hero/HeroComp";
import { AboutComp } from "./components/about/AboutComp";
import { Skills } from "./components/skills/Skills";
import ProjectsComp from "./components/projects/ProjectsComp";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar></Navbar>
        <div className="App">
          <HeroComp></HeroComp>
          <LazyLoad height={40}>
            <AboutComp></AboutComp>
            <Skills></Skills>
            <ProjectsComp></ProjectsComp>
          </LazyLoad>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
