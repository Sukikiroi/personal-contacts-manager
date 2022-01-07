import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';

//Pages
import HomePage from './app/homePage'

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HomePage />

    </div>
  );
}

export default App;





   
  
const Navbar = () => {
  return (
      <div style={{height:'48px',backgroundColor:"thistle"}}>
          
      </div>
  )
}