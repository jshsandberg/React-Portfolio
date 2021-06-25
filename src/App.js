import React, { useState } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import "./App.css";
import Inventory from "./components/Projects/Inventory";
import PokemonInfo from "./components/Pokemon/PokemonInfo";
import Pokemon from "./components/Projects/Pokemon";
import Welcome from "./components/Welcome/Welcome";
import Recipe from "./components/Projects/Recipe";
import RoadPlanner from "./components/Projects/RoadPlanner";
import RecipeInfo from "./components/Recipe/Recipe";
import InventoryInfo from "./components/Inventory/Inventory";

function App() {

  const [id, setId] = useState('home');

  return (
      <div className="page">
          <div className="navBar">
              <li className="list">
                  <SwitchTransition mode={'out-in'}>
                      <CSSTransition timeout={300} classNames="alert" key={id}>
                        <div>
                          { id !== 'home' ? <ul onClick={() => setId('home')}>home</ul> : null }
                        </div>
                      </CSSTransition>
                  </SwitchTransition>
                  <ul onClick={() => setId('work')}>work</ul>
                  <ul onClick={() => setId('contact')}>contact</ul>
                  <ul>about</ul>
              </li>
          </div>
          <div>
            <SwitchTransition mode={'out-in'}>
                      <CSSTransition appear={true} timeout={500} classNames="alert" key={id}>
                        <div>
                          {id === 'home' ? 
                            <Welcome />
                                :
                          id === 'work' ? 
                                <div className="mainHolder">
                                 <div className="holder">
                                   <div onClick={() => setId("pokemon")}>
                                    <Pokemon />
                                   </div>
                                   <div onClick={() => setId("inventory")}>
                                    <Inventory />
                                   </div>
                                  </div>
                                 <div className="holder">
                                   <div onClick={() => setId("recipe")}>
                                    <Recipe />
                                   </div>
                                   <div onClick={() => setId("roadplanner")}>
                                    <RoadPlanner />
                                   </div>
                                 </div>
                                </div>
                                 : 
                          id === "pokemon" ?
                                  <div>
                                    <PokemonInfo />
                                  </div> 
                          : id === "recipe" ?
                                  <div>
                                    <RecipeInfo />
                                  </div> 
                          : id === "inventory" ?
                                  <div>
                                    <InventoryInfo />
                                  </div>
                          : null
                                 }
                        </div>
                     </CSSTransition>
            </SwitchTransition>
          </div>

      </div>
  )
}

export default App;
