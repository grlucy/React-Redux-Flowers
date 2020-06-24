import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Red from "./pages/Red";
import Blue from "./pages/Blue";
import NoMatch from "./pages/NoMatch";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/red" component={Red} />
        <Route exact path="/blue" component={Blue} />
        <Route path="*" component={NoMatch} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
