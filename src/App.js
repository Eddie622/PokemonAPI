import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [pokemon, setPokemon] = useState([]);

  const onClick = () => {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=807')
      .then(response => response.json())
      .then(response => setPokemon(response.results))
  };

  return (
    <div className="App">
      <button onClick={onClick}>Fetch Pokemon</button>

      <ul>
        {pokemon.length > 0 && pokemon.map((pokemon, index)=>{
          return (<li style={{margin: 'auto', width: 'fit-content'}} key={index}>{pokemon.name}</li>)
        })}
      </ul>
    </div>
  );
}

export default App;
