import React from 'react';
import './App.css';
import NumberDisplayer from './NumberDisplayer';

function App() {
  return (
    <div className="App">
    <NumberDisplayer
        num={10}
        // name="miko"
    />
    </div>
  );
}

export default App;
