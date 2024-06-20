import React, { useState } from 'react';
import './App.css';
import AdviceList from './Components/AdviceList';

function App() {
  const [advice, setAdvice] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        <h1>Advice Generator</h1>
        <AdviceList onSelectAdvice={setAdvice} />
        {advice && <p>{advice}</p>}
      </header>
    </div>
  );
}

export default App;
