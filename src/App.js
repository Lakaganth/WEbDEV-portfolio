import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

// Components
import { Navbar } from "./components/navbar/Navbar";
import { HomePage } from "./pages/HomePage";

import "./App.css";
import { ProjectsPage } from "./components/ProjectPage/ProjectsPage";
import { SosWebsite } from "./components/ProjectPage/SosWebsite";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar></Navbar>
        <div className="App">
          <Route path="/" exact component={HomePage}></Route>
          <Route path="/projects" exact component={ProjectsPage}></Route>
          <Route path="/projects/sos-web" exact component={SosWebsite}></Route>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
