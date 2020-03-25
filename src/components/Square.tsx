import * as React from "react";
import classnames from "classnames";
import "../css/Square.css";

export interface SquareProps {
  styling: SquareStyle;
  onClick: () => void;
}

export enum SquareStyle {
  black = "black",
  white = "white",
  selected = "selected",
  oneMove = "oneMove",
  twoMoves = "twoMoves"
}

export default function Square(props: SquareProps) {
  const classNames = classnames("Square", props.styling);
  return <div onClick={props.onClick} className={classNames}></div>;
}
