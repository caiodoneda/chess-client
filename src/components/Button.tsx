import * as React from "react";
import "../css/Button.css";

interface ButtonProps {
  children: React.ReactNode;
  callback?: () => void;
  disabled?: boolean;
}

export default function Button(props: ButtonProps) {
  return (
    <button
      className="Button"
      disabled={props.disabled}
      onClick={props.callback}
    >
      {props.children}
    </button>
  );
}
