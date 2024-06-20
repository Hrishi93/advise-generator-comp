import React, { useState } from 'react';
import adviceData from './adviceData';

const AdviceList = ({ onSelectAdvice }) => {
  const [category, setCategory] = useState('');

  const getRandomAdvice = (category) => {
    const advices = adviceData[category];
    const randomIndex = Math.floor(Math.random() * advices.length);
    return advices[randomIndex];
  };

  const handleGenerateAdvice = () => {
    if (category) {
      const advice = getRandomAdvice(category);
      onSelectAdvice(advice);
    }
  };

  return (
    <div>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Select a category</option>
        <option value="financial">Financial</option>
        <option value="health">Health</option>
        <option value="education">Education</option>
      </select>
      <button onClick={handleGenerateAdvice} disabled={!category}>
        Get Advice
      </button>
    </div>
  );
};

export default AdviceList;
