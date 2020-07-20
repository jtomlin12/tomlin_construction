import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import Navigation from "./components/Navigation";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <Navigation>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Navigation>
    </BrowserRouter>
  );
}
