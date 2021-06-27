import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';
import Character from './components/Character'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [character, setCharacter] = useState([])

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios.get(`https://swapi.dev/api/people`)
      .then(res => {
        setCharacter(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  console.log(character)

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {character.map(ch => {
      return <Character name={ch.name} gender={ch.gender} birth_year={ch.birth_year}  hair={ch.hair_color}  
      eyes={ch.eye_color}  skin={ch.skin_color}  weight={ch.mass}  height={ch.height}  />})}
      </div>
  );
}

export default App;
