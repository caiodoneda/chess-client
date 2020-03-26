import * as React from "react";
import Square, { SquareStyle } from "./Square";
import { SquareType } from "./ChessBoard";
import { Position, Moves } from "../types";

interface SquaresProps {
  moves: Moves;
  onSquareClick: (position: Position) => void;
  selectedPosition?: Position;
  squares: SquareType[];
}

export default function Squares(props: SquaresProps) {
  const isPositionEqual = (p1: Position, p2: Position) =>
    p1.x === p2.x && p1.y === p2.y;

  const isPositionInMovesArray = (position: Position, moves: Position[]) =>
    moves.find(move => isPositionEqual(move, position)) !== undefined;

  const isOdd = (number: number) => number % 2 !== 0;

  const isSelected = (position: Position) =>
    props.selectedPosition && props.selectedPosition === position;

  const getSquareStyling = (position: Position) => {
    if (isSelected(position)) {
      return SquareStyle.selected;
    }

    if (isPositionInMovesArray(position, props.moves.twoMoves)) {
      return SquareStyle.twoMoves;
    }

    if (isPositionInMovesArray(position, props.moves.oneMove)) {
      return SquareStyle.oneMove;
    }

    if (isOdd(position.x + position.y)) {
      return SquareStyle.black;
    }

    return SquareStyle.white;
  };

  return (
    <>
      {props.squares.map(square => (
        <Square
          key={square.key}
          onClick={() => props.onSquareClick(square.position)}
          styling={getSquareStyling(square.position)}
        />
      ))}
    </>
  );
}
