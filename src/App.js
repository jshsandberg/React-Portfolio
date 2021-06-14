import React, { useState } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import "./App.css";
import PokemonInfo from "./components/Pokemon/PokemonInfo";
import Pokemon from "./components/Projects/Pokemon.js";
import Welcome from "./components/Welcome/Welcome";




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
                                 <div className="holder">
                                   <div onClick={() => setId("pokemon")}>
                                    <Pokemon />
                                   </div>
                                   <div onClick={() => setId("pokemon")}>
                                    <Pokemon />
                                   </div>
                                 </div>
                                 : 
                          id === "pokemon" ?
                                  <div>
                                    <PokemonInfo />
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
