import React, { useState, useEffect, useRef } from "react";

const BoxHuntTwo = () => {
  const [gameState, setGameState] = useState("stopped"); // "stopped", "playing", "paused"
  const [reactionTimes, setReactionTimes] = useState([]);
  const [boxPosition, setBoxPosition] = useState({ top: 0, left: 0 });
  const [startTime, setStartTime] = useState(null);
  const playAreaRef = useRef(null);
  const boxSize = 10; // 10x10 pixel object

  const startGame = () => {
    if (gameState === "paused") {
      setGameState("playing");
    } else {
      setReactionTimes([]);
      setGameState("playing");
      spawnBox();
    }
  };

  const pauseGame = () => {
    setGameState("paused");
  };

  const resetGame = () => {
    setGameState("stopped");
    setReactionTimes([]);
  };

  const spawnBox = () => {
    if (playAreaRef.current) {
      const playArea = playAreaRef.current.getBoundingClientRect();
      const maxTop = playArea.height - boxSize;
      const maxLeft = playArea.width - boxSize;
      const newTop = Math.random() * maxTop;
      const newLeft = Math.random() * maxLeft;
      setBoxPosition({ top: newTop, left: newLeft });
      setStartTime(Date.now());
    }
  };

  const handleBoxClick = () => {
    if (startTime) {
      const reactionTime = Date.now() - startTime;
      setReactionTimes((prev) => [...prev, reactionTime]);
      spawnBox();
    }
  };

  useEffect(() => {
    let interval;
    if (gameState === "playing") {
      interval = setInterval(spawnBox, 2000); // Move the box every 2 seconds
    }
    return () => clearInterval(interval);
  }, [gameState]);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      {/* Header Section */}
      <div style={{ marginBottom: "20px" }}>
        <button
          onClick={startGame}
          style={{ marginRight: "10px" }}
        >
          Start
        </button>
        <button
          onClick={pauseGame}
          style={{ marginRight: "10px" }}
        >
          Pause
        </button>
        <button onClick={resetGame}>Reset</button>
      </div>

      {/* Play Area */}
      <div
        ref={playAreaRef}
        style={{
          position: "relative",
          width: "400px",
          height: "400px",
          border: "1px solid black",
          marginBottom: "20px",
        }}
      >
        {gameState === "playing" && (
          <div
            onClick={handleBoxClick}
            style={{
              position: "absolute",
              top: `${boxPosition.top}px`,
              left: `${boxPosition.left}px`,
              width: `${boxSize}px`,
              height: `${boxSize}px`,
              backgroundColor: "red",
              cursor: "pointer",
            }}
          ></div>
        )}
      </div>

      {/* Dynamic Table Section */}
      <table
        border="1"
        style={{ width: "100%", textAlign: "center" }}
      >
        <thead>
          <tr>
            <th>Attempt</th>
            <th>Reaction Time (ms)</th>
          </tr>
        </thead>
        <tbody>
          {reactionTimes.length > 0 ? (
            reactionTimes.map((time, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{time}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="2">No results yet</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BoxHuntTwo;
