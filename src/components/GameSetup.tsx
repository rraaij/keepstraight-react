import React, { useContext, useRef } from "react";

import { GameContext } from "../store/game-context";
import classes from "./GameSetup.module.css";
import { PlayerEnum, Setup } from "../models/game";

const GameSetup: React.FC = () => {
  const gameCtx = useContext(GameContext);

  const playerOneInputRef = useRef<HTMLInputElement>(null);
  const playerTwoInputRef = useRef<HTMLInputElement>(null);
  const targetScoreInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const setupInfo: Setup = {
      playerOne: playerOneInputRef.current!.value,
      playerTwo: playerTwoInputRef.current!.value,
      targetScore: parseInt(targetScoreInputRef.current!.value),
      startingPlayer: PlayerEnum.PLAYER_ONE,
    };
    gameCtx.startGame(setupInfo);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="player-one">Player One</label>
      <input type="text" id="player-one" ref={playerOneInputRef} />
      <label htmlFor="player-two">Player Two</label>
      <input type="text" id="player-two" ref={playerTwoInputRef} />
      <label htmlFor="target-score">Target Score</label>
      <input type="number" id="target-score" ref={targetScoreInputRef} />
      {
        // TODO starting player selector switch (radiobuttons?)
      }
      <button>Start Game</button>
    </form>
  );
};

export default GameSetup;
