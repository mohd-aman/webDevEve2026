import React from 'react';
import { useCallback, useEffect, useRef, useState } from "react";

//utility function

const formatTime = (time) => {
  const getSeconds = `0${time % 60}`.slice(-2);
  const minutes = Math.floor(time / 60);
  const getMinutes = `0${minutes % 60}`.slice(-2);
  const getHours = `0${Math.floor(time / 3600)}`.slice(-2);
  return `${getHours}:${getMinutes}:${getSeconds}`;
};

const Stopwatch =  React.memo(() => {
  const [time, setTime] = useState(0); // representing in seconds
  const intervalRef = useRef(null);
  console.log("stopwat Rendering")
  const startTimer = useCallback(() => {
    if (intervalRef.current == null) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
  },[])

  const stopTimer = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  },[])

  const resetTimer = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setTime(0);
  },[])

  useEffect(() => {
    //cleanup
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div>
      <h1>{formatTime(time)}</h1>
      <button onClick={startTimer}>start</button>
      <button onClick={stopTimer}>stop</button>
      <button onClick={resetTimer}>reset</button>
    </div>
  );
});

export default Stopwatch
