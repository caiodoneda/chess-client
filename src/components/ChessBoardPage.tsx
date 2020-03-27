import * as React from "react";
import ChessBoard from "./ChessBoard";
import ChessBoardLegend from "./ChessBoardLegend";
import "../css/ChessBoardPage.css";
import { Position, Moves } from "../types";
import Button from "./Button";

const VALID_MOVES_URL = "http://localhost:5000/api/valid-moves";
const POSSIBLE_LETTERS = "ABCDEFGH";

const parsePositionToAlgebraicNotation = (position: Position) =>
  `${POSSIBLE_LETTERS.charAt(position.x)}${position.y + 1}`;

const parseAlgebraicNotationToPosition = (
  algebraicNotationPosition: string
) => ({
  x: POSSIBLE_LETTERS.indexOf(algebraicNotationPosition.charAt(0)),
  y: Number(algebraicNotationPosition.charAt(1)) - 1
});

interface State {
  moves: Moves;
  position?: Position;
  apiError: boolean;
}

interface ChessBoardProps {}

export default class ChessBoardPage extends React.Component<
  ChessBoardProps,
  State
> {
  state: State = {
    moves: {
      oneMove: [],
      twoMoves: []
    },
    apiError: false
  };

  fetchMoves = () => {
    if (this.state.position === undefined) return;

    const algebraicNotationPosition = parsePositionToAlgebraicNotation(
      this.state.position
    );

    fetch(
      `${VALID_MOVES_URL}?position=${algebraicNotationPosition}&piece=knight`
    )
      .then(response => response.json())
      .then(moves => {
        const parsedMoves = {
          oneMove: moves.oneMove.map((move: string) =>
            parseAlgebraicNotationToPosition(move)
          ),
          twoMoves: moves.twoMoves.map((move: string) =>
            parseAlgebraicNotationToPosition(move)
          )
        };

        this.setState({ moves: parsedMoves, apiError: false });
      })
      .catch(() => this.setState({ apiError: true }));
  };

  setPosition = (position: Position) => {
    this.setState({ position, moves: { oneMove: [], twoMoves: [] } });
  };

  render() {
    return (
      <div className="ChessBoardPage">
        <h2 className="ChessBoardPage-title">Valid Chess Moves (Knight)</h2>
        <div className="ChessBoardPage-board">
          <ChessBoard
            setPosition={this.setPosition}
            selectedPosition={this.state.position}
            moves={this.state.moves}
          />
          <div>
            <div className="ChessBoardPage-legend">
              <ChessBoardLegend />
            </div>
            <Button callback={this.fetchMoves}>Calculate Valid Moves</Button>
          </div>
        </div>
        {this.state.apiError ? (
          <p className="ChessBoardPage-apiError">
            There was an error while fetching data from the API
          </p>
        ) : null}
      </div>
    );
  }
}
