import './App.css';
import Counter from './Counter'
import React from 'react';
import Hello from './hello/Hello'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hello />
        <Counter />
      </header>
    </div>
  );
}

export default App;
