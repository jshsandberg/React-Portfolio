import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Pokedex from "./pages/Pokedex"
import Welcome from "./pages/Welcome"
import Project from "./pages/Project"
import Recipe from "./pages/Recipe"
import Roadmap from "./pages/Roadmap"
import Shelf from "./pages/Shelf";
import Contact from "./pages/Contact";
import Bio from "./pages/Bio";

function App() {
  return (

        <Router basename="/react-portfolio">
          <Route exact path="/" component={Welcome} />
          <Route exact path="/project" component={Project} />
          <Route exact path="/pokedex" component={Pokedex} />
          <Route exact path="/recipe" component={Recipe} />
          <Route exact path="/roadmap" component={Roadmap} />
          <Route exact path="/shelfkeeper" component={Shelf} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/bio" component={Bio} />
        </Router>
  );
}

export default App;
