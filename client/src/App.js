import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Saved from "./pages/Saved";
import Books from "./pages/Books";
import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <Nav />
      <Switch>
        <Route path="/Books" component={Books} />
        <Route path="/Saved" component={Saved} />
        <Redirect from="*" exact to="/Books" />
      </Switch>
    </div>
  );
}

export default App;
