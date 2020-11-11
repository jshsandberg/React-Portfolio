import { BrowserRouter as Router, Route } from "react-router-dom";
import Pokedex from "./pages/Pokedex"
import Welcome from "./pages/Welcome"
import Project from "./pages/Project"

function App() {
  return (

        <Router>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/project" component={Project} />
          <Route exact path="/pokedex" component={Pokedex} />
        </Router>
  );
}

export default App;
