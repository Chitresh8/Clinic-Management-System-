import { useState, useEffect } from "react";

export const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timer = null;
    if (running) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    }
    return () => clearInterval(timer);
  }, [running]);

  const startStop = () => setRunning(!running);

  const reset = () => {
    setTime(0);
    setRunning(false);
  };

  const formatTime = (time) => {
    // const hours = Math.floor(time / 3600);
    // const mins = Math.floor(time / 60);
    // const secs = time % 60;
    // const milliseconds = time % 1000;
    const hours = Math.floor(time / 3600000); // Convert milliseconds to hours
    const mins = Math.floor((time % 3600000) / 60000); // Remaining minutes
    const secs = Math.floor((time % 60000) / 1000); // Remaining seconds
    const milliseconds = time % 1000; // Remaining milliseconds
    return `${String(hours).padStart(2, "0")}:${String(mins).padStart(
      2,
      "0"
    )}:${String(secs).padStart(2, "0")}:${String(milliseconds).padStart(
      3,
      "0"
    )}`;
  };

  // Explanation of Changes:
  // Hours Calculation:

  // Math.floor(time / 3600000) converts total milliseconds to hours. (1 hour = 3,600,000 milliseconds)
  // Minutes Calculation:

  // Math.floor((time % 3600000) / 60000) calculates the remaining minutes after extracting hours. (1 minute = 60,000 milliseconds)
  // Seconds Calculation:

  // Math.floor((time % 60000) / 1000) calculates the remaining seconds after extracting minutes. (1 second = 1,000 milliseconds)
  // Milliseconds Calculation:

  // time % 1000 gives the remaining milliseconds after extracting seconds.
  // Formatting:

  // Each part of the time is formatted to ensure it has leading zeros as required.

  return (
    <>
      <h1>Stopwatch</h1>
      <h2>{formatTime(time)}</h2>
      <button onClick={startStop}>{running ? "Pause" : "Start"}</button>
      <button
        onClick={reset}
        disabled={time === 0}
      >
        Reset
      </button>
    </>
  );
};
