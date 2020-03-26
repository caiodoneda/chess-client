import * as React from "react";
import "../css/Button.css";

interface ButtonProps {
  children: React.ReactNode;
  callback?: () => void;
}

export default function Button(props: ButtonProps) {
  return (
    <button className="Button" onClick={props.callback}>
      {props.children}
    </button>
  );
}
