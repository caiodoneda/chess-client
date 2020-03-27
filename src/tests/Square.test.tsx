import * as React from "react";
import { render, fireEvent } from "@testing-library/react";
import Square, { SquareStyle } from "../components/Square";

test("Adds the correct class to element", () => {
  const props = {
    onClick: () => {},
    styling: SquareStyle.selected
  };
  render(<Square {...props} />);
  const { container } = render(<Square {...props} />);

  const square = container.querySelector("div");
  expect(square?.className).toBe(`Square ${props.styling}`);
});

test("Calls callback function once the element is clicked", () => {
  const props = {
    onClick: () => {},
    styling: SquareStyle.selected
  };

  jest.spyOn(props, "onClick");

  render(<Square {...props} />);
  const { container } = render(<Square {...props} />);
  const square = container.querySelector("div");
  if (square) fireEvent.click(square);
  expect(props.onClick).toHaveBeenCalled();
});
