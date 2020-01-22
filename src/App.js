import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

// Components
import { Navbar } from "./components/navbar/Navbar";
import { HomePage } from "./pages/HomePage";

import "./App.css";
import { ProjectsPage } from "./components/ProjectPage/ProjectsPage";
import { SosWebsite } from "./components/ProjectPage/SosWebsite";
import { SosReport } from "./components/ProjectPage/SosReport";
import { InventoryManager } from "./components/ProjectPage/InventoryManager";
import ScrollToTop from "./ScrollToTop";
import { AboutPage } from "./components/aboutPage/AboutPage";
import { ContactPage } from "./components/contactPage/ContactPage";
import { Footer } from "./components/footer/Footer";
import withSplashScreen from "./components/splashScreen/withSplashScreen";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <ScrollToTop />
        <Navbar></Navbar>
        <div className="App">
          <Switch>
            <Route path="/" exact component={HomePage}></Route>
            <Route path="/projects" exact component={ProjectsPage}></Route>
            <Route
              path="/projects/sos-web"
              exact
              component={SosWebsite}
            ></Route>
            <Route
              path="/projects/sos-reportapp"
              exact
              component={SosReport}
            ></Route>
            <Route
              path="/projects/inventory-manager"
              exact
              component={InventoryManager}
            ></Route>
            <Route path="/about" exact component={AboutPage}></Route>
            <Route path="/contact" exact component={ContactPage}></Route>
          </Switch>
        </div>
        <Footer />>
      </Router>
    </Provider>
  );
}

export default withSplashScreen(App);
