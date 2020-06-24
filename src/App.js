import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

import Header from "./components/Header";

import Home from "./pages/Home";
import Red from "./pages/Red";
import Blue from "./pages/Blue";
import NoMatch from "./pages/NoMatch";

function App() {
  return (
    <Router>
      <div className="main-content">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/red" component={Red} />
          <Route exact path="/blue" component={Blue} />
          <Route path="*" component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
