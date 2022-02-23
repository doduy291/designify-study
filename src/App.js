import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Global } from "@emotion/react";
import { GlobalStyled } from "./globalStyles";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Global styles={GlobalStyled} />
      <Navbar />
      <Switch>
        <Route path="/" component={HomePage} exact />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
