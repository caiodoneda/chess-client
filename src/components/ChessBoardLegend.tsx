import * as React from 'react';
import '../css/ChessBoardLegend.css';

export default function ChessBoardLegend() {
    return (
        <div className="ChessBoardLegend">
            <div className="ChessBoardLegend-legendGroup">
                <div className="square selected" />
                <p> Knight initial position </p>
            </div>
            <div className="ChessBoardLegend-legendGroup">
                <div className="square oneMove" />
                <p> Possible moves in exactly 1 turn </p>
            </div>
            <div className="ChessBoardLegend-legendGroup">
                <div className="square twoMoves" />
                <p> Possible moves in exactly 2 turns </p>
            </div>
        </div>
    );
}
