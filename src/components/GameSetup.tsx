import React, { SyntheticEvent, useContext, useRef, useState } from "react";

import { GameContext } from "../store/game-context";
import classes from "./GameSetup.module.css";
import { PlayerEnum, Setup } from "../models/game";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardSubtitle,
  CardTitle,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

const GameSetup: React.FC = () => {
  const gameCtx = useContext(GameContext);

  const playerOneInputRef = useRef<HTMLInputElement>(null);
  const playerTwoInputRef = useRef<HTMLInputElement>(null);
  const targetScoreInputRef = useRef<HTMLInputElement>(null);
  const [selectedStartingPlayer, setSelectedStartingPlayer] =
    useState<PlayerEnum>(PlayerEnum.PLAYER_ONE);

  const startingPlayerHandler = (event: SyntheticEvent) => {
    const selectedValue = (event.target as HTMLInputElement).innerText;
    setSelectedStartingPlayer(() => {
      return selectedValue === "Player One"
        ? PlayerEnum.PLAYER_ONE
        : PlayerEnum.PLAYER_TWO;
    });
  };

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const setupInfo: Setup = {
      playerOne: playerOneInputRef.current!.value,
      playerTwo: playerTwoInputRef.current!.value,
      targetScore: parseInt(targetScoreInputRef.current!.value),
      startingPlayer: selectedStartingPlayer,
    };
    gameCtx.startGame(setupInfo);
  };

  return (
    <Card className={classes.setupCard}>
      <CardBody>
        <CardTitle tag="h5">Game Setup</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          Enter some info to get started!
        </CardSubtitle>
        <Form onSubmit={submitHandler}>
          <FormGroup row>
            <Label htmlFor="player-one" sm="3">
              Player One
            </Label>
            <Col sm="9">
              <Input type="text" id="player-one" innerRef={playerOneInputRef} />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label htmlFor="player-two" sm="3">
              Player Two
            </Label>
            <Col sm="9">
              <Input type="text" id="player-two" innerRef={playerTwoInputRef} />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label htmlFor="target-score" sm="3">
              Target Score
            </Label>
            <Col sm="9">
              <Input
                type="number"
                id="target-score"
                innerRef={targetScoreInputRef}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label htmlFor="starting-player" sm="3">
              Starting player
            </Label>
            <ButtonGroup sm="9">
              <Button
                color="primary"
                active={selectedStartingPlayer === PlayerEnum.PLAYER_ONE}
                onClick={startingPlayerHandler}
              >
                Player One
              </Button>
              <Button
                color="primary"
                active={selectedStartingPlayer === PlayerEnum.PLAYER_TWO}
                onClick={startingPlayerHandler}
              >
                Player Two
              </Button>
            </ButtonGroup>
          </FormGroup>
          <Button color="danger" className={classes.setupButton}>
            Start Game
          </Button>
        </Form>
      </CardBody>
    </Card>
  );
};

export default GameSetup;
