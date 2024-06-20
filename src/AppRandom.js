import React, { useState } from 'react';
import './App.css';
import AdviceListRandom from './Components/AdviceListRandom';

function AppRandom() {
  const [advice, setAdvice] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        <h1>Advice Generator</h1>
        <AdviceListRandom onSelectAdvice={setAdvice} />
        {advice && <p>{advice}</p>}
      </header>
    </div>
  );
}

export default AppRandom;
