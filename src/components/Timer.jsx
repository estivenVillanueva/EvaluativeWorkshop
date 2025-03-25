import { useState, useEffect } from 'react';

export const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const toggleTimer = () => {
    if (isRunning) {
      setIsRunning(false);
      setSeconds(0);
    } else {
      setIsRunning(true);
    }
  };

  return (
    <div>
      <h2>Timer: {seconds} segundos</h2>
      <button onClick={toggleTimer}>
        {isRunning ? 'Stop' : 'Start'}
      </button>
    </div>
  );
}; 