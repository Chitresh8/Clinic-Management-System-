import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Login } from "./components/Login/Login";
import BoxHuntTwo from "../BoxHuntTwo";
import { StopWatch } from "./components/StopWatch/StopWatch";
import AkshaySainiProject from "./components/Akshay Saini Project/AkshaySainiProject";

function App() {
  const [count, setCount] = useState(0);

  const cricketTeam = [
    {
      teamName: "India",
      players: ["Rohit", "Dhoni", "Kohli"],
      captain: "Dhoni",
      jerseyNumber: 7,
    },
    {
      teamName: "USA",
      players: ["Roman", "Jey USO", "Jimmy USO"],
      captain: "Roman",
      jerseyNumber: 11,
    },
    {
      teamName: "UK",
      players: ["Justin Bieber", "Eminem", "Ed Sheeran"],
      captain: "Justin Bieber",
      jerseyNumber: 12,
    },
    {
      teamName: "Australia",
      players: ["Yuvraj", "Sehwag", "Gambhir"],
      captain: "Rohit",
      jerseyNumber: 13,
    },
    {
      teamName: "Japan",
      players: ["Shinsuke", "Asuka", "IO Shirai"],
      captain: "Shinsuke",
      jerseyNumber: 14,
    },
    {
      teamName: "Russia",
      players: ["Ambani", "Adani", "Buffet"],
      captain: "Ambani",
      jerseyNumber: 15,
    },
    {
      teamName: "Japan",
      players: ["Shinsuke", "Asuka", "IO Shirai"],
      captain: "Shinsuke",
      jerseyNumber: 14,
    },
    {
      teamName: "Russia",
      players: ["Ambani", "Adani", "Buffet"],
      captain: "Ambani",
      jerseyNumber: 15,
    },
  ];

  let sortPlayers = [];
  let duplicatePlayers = cricketTeam.reduce((accu, curr) => {
    if (accu !== curr) {
      sortPlayers.push(curr);
    } else {
      accu = curr;
    }
  }, []);
  console.log("Removed Duplicate Players=>", duplicatePlayers);

  const country = "India";

  return (
    <>
      <div>
        <Login />
        <BoxHuntTwo />
        <StopWatch />
        <AkshaySainiProject countryName={country} />
        <a
          href="https://vitejs.dev"
          target="_blank"
        >
          <img
            src={viteLogo}
            className="logo"
            alt="Vite logo"
          />
        </a>
        <a
          href="https://react.dev"
          target="_blank"
        >
          <img
            src={reactLogo}
            className="logo react"
            alt="React logo"
          />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      {/* {cricketTeam.map((ele, index) => {
        return (
          <div key={index}>
            <h1>Team : {ele.teamName}</h1>
            <p>Captain :{ele.players[0]}</p>
          </div>
        );
      })} */}
      {cricketTeam.map((ele, index) => {
        return (
          <div key={index}>
            <h3>Team :{ele.teamName}</h3>

            <p>Captain:{ele.captain}</p>

            <p>Player 1:{ele.players[0]}</p>

            <p>Player 2:{ele.players[1]}</p>

            <p>Player 3:{ele.players[2]}</p>

            <p>Captain Jersey no:{ele.jerseyNumber}</p>

            {/* <div>
              {ele.players.map((player, idx) => {
                return (
                  <div key={idx}>
                    <p>{player}</p>
                  </div>
                );
              })}
            </div> */}
          </div>
        );
      })}
    </>
  );
}

export default App;
