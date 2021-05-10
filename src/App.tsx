import React from 'react';
import './App.css';
import Board from './components/Board';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          React Tic Tac Toe
        </h1>
        <Board></Board>
      </header>
    </div>
  );
}

export default App;
