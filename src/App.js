import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  return (
    <Fragment>
      <Router>
        <Navbar />
        <Route exact path="/" component={Home} />
      </Router>
    </Fragment>
  );
}

export default App;
