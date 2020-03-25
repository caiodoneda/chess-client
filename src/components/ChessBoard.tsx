import * as React from "react";
import { Position, Moves } from "../types";
import Square, { SquareStyle } from "./Square";
import "../css/ChessBoard.css";

const BOARD_DEFAULT_SIZE = 8;

export interface ChessBoardProps {
  setPosition: (position: Position) => void;
  selectedPosition?: Position;
  moves: Moves;
}

type Square = {
  key: string;
  position: Position;
};

interface State {
  squares: Square[];
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

  onSquareClick(position: Position) {
    this.props.setPosition(position);
  }

  isOdd(number: number) {
    return number % 2 !== 0;
  }

  isSelected(position: Position) {
    return (
      this.props.selectedPosition && this.props.selectedPosition === position
    );
  }

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

  isPositionEqual = (p1: Position, p2: Position) =>
    p1.x === p2.x && p1.y === p2.y;

  isPositionInMovesArray = (position: Position, moves: Position[]) =>
    moves.find(move => this.isPositionEqual(move, position)) !== undefined;

  getSquareStyling = (position: Position) => {
    if (this.isSelected(position)) {
      return SquareStyle.selected;
    }

    if (this.isPositionInMovesArray(position, this.props.moves.twoMoves)) {
      return SquareStyle.twoMoves;
    }

    if (this.isPositionInMovesArray(position, this.props.moves.oneMove)) {
      return SquareStyle.oneMove;
    }

    if (this.isOdd(position.x + position.y)) {
      return SquareStyle.black;
    }

    return SquareStyle.white;
  };

  renderSquares = () => {
    return this.state.squares.map(square => {
      return (
        <Square
          key={square.key}
          onClick={() => this.onSquareClick(square.position)}
          styling={this.getSquareStyling(square.position)}
        />
      );
    });
  };

  renderHelperLetters = () => {
    return (
      <div className="ChessBoard-lettersContainer">
        <div className="ChessBoard-letters">A</div>
        <div className="ChessBoard-letters">B</div>
        <div className="ChessBoard-letters">C</div>
        <div className="ChessBoard-letters">D</div>
        <div className="ChessBoard-letters">E</div>
        <div className="ChessBoard-letters">F</div>
        <div className="ChessBoard-letters">G</div>
        <div className="ChessBoard-letters">H</div>
      </div>
    );
  };

  renderHelperNumbers = () => {
    return (
      <div className="ChessBoard-numbersContainer">
        <div className="ChessBoard-numbers">1</div>
        <div className="ChessBoard-numbers">2</div>
        <div className="ChessBoard-numbers">3</div>
        <div className="ChessBoard-numbers">4</div>
        <div className="ChessBoard-numbers">5</div>
        <div className="ChessBoard-numbers">6</div>
        <div className="ChessBoard-numbers">7</div>
        <div className="ChessBoard-numbers">8</div>
      </div>
    );
  };

  render() {
    return (
      <div className="ChessBoard">
        {this.renderHelperLetters()}
        <div className="ChessBoard-squaresContainer">
          {this.renderHelperNumbers()}
          <div className="ChessBoard-squares">{this.renderSquares()}</div>
          {this.renderHelperNumbers()}
        </div>
        {this.renderHelperLetters()}
      </div>
    );
  }
}
