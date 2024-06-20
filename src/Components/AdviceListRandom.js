import React from 'react';

const adviceArray = [
  "Keep a positive mindset.",
  "Don't be afraid to ask for help.",
  "Stay focused and persistent.",
  "Take breaks and rest when needed.",
  "Always keep learning.",
  "Practice gratitude.",
  "Stay organized and plan ahead.",
  "Be kind to yourself and others.",
  "Set realistic goals.",
  "Embrace challenges as opportunities."
];

const AdviceListRandom = ({ onSelectAdvice }) => {
  const getRandomAdvice = () => {
    const randomIndex = Math.floor(Math.random() * adviceArray.length);
    return adviceArray[randomIndex];
  };

  const handleClick = () => {
    const advice = getRandomAdvice();
    onSelectAdvice(advice);
  };

  return (
    <div>
      <button onClick={handleClick}>Get Advice</button>
    </div>
  );
};

export default AdviceListRandom;
