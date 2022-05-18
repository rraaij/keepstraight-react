import React from "react";
import GameContextProvider from "./store/game-context";
import { Link, Outlet } from "react-router-dom";

const App: React.FC = () => {
  return (
    <GameContextProvider>
      <h1>Keepstraight</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/setup">Setup</Link> | <Link to="/game">Game</Link>
      </nav>
      <Outlet />
    </GameContextProvider>
  );
};

export default App;
