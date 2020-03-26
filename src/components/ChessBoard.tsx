import * as React from "react";
import { Position, Moves } from "../types";
import "../css/ChessBoard.css";
import BoardNumbers from "./BoardNumbers";
import BoardLetters from "./BoardLetters";
import Squares from "./Squares";

const BOARD_DEFAULT_SIZE = 8;

export interface ChessBoardProps {
  setPosition: (position: Position) => void;
  selectedPosition?: Position;
  moves: Moves;
}

export type SquareType = {
  key: string;
  position: Position;
};

interface State {
  squares: SquareType[];
}
export default class ChessBoard extends React.Component<
  ChessBoardProps,
  State
> {
  state: State = {
    squares: []
  };

  componentDidMount() {
    this.setState({ squares: this.createSquares(BOARD_DEFAULT_SIZE) });
  }

  onSquareClick = (position: Position) => {
    this.props.setPosition(position);
  };

  createSquares(boardSize: number) {
    const squares = [];

    for (let y = boardSize - 1; y >= 0; y--) {
      for (let x = 0; x < boardSize; x++) {
        const currentPosition = { x, y };
        squares.push({
          key: `${x}-${y}`,
          position: currentPosition
        });
      }
    }
    return squares;
  }

  render() {
    return (
      <div className="ChessBoard">
        <BoardLetters />
        <div className="ChessBoard-squaresContainer">
          <BoardNumbers />
          <div className="ChessBoard-squares">
            <Squares
              squares={this.state.squares}
              moves={this.props.moves}
              onSquareClick={this.onSquareClick}
              selectedPosition={this.props.selectedPosition}
            />
          </div>
          <BoardNumbers />
        </div>
        <BoardLetters />
      </div>
    );
  }
}
