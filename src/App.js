import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Pokedex from "./pages/Pokedex"
import Welcome from "./pages/Welcome"
import Project from "./pages/Project"
import Recipe from "./pages/Recipe"

function App() {
  return (

        <Router basename="/React-Portfolio">
          <Route exact path="/" component={Welcome} />
          <Route exact path="/project" component={Project} />
          <Route exact path="/pokedex" component={Pokedex} />
          <Route exact path="/recipe" component={Recipe} />
        </Router>
  );
}

export default App;
