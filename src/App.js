import './App.css';
import React from 'react';
import Bmi from './auth/Bmi';
import Calc from './auth/Calc';
import Grade from './auth/Grade';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Bmi />
        <Calc />
        <Grade />
      </header>
    </div>
  );
}

export default App;
