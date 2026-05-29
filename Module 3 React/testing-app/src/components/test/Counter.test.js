import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "../Counter";

it("should test initial state", () => {
  //render that component in isolation
  render(<Counter />);
  //selection
  const countText = screen.getByText("Count is 0");
  const plusBtn = screen.getByText("+");
  const minusBtn = screen.getByText("-");

  //verifying
  expect(countText).toBeInTheDocument();
  expect(plusBtn).toBeInTheDocument();
  expect(minusBtn).toBeInTheDocument();
});

describe("Counter button test cases", () => {
  it("should increment by 1", () => {
    //render comp
    render(<Counter />);
    //selection out of component
    const plusBtn = screen.getByText("+");
    //clicking on button
    fireEvent.click(plusBtn);

    const isOnePresent = screen.getByText("Count is 1");
    expect(isOnePresent).toBeInTheDocument();
  });

  it("should decrement by 2 on double click of - button", () => {
    render(<Counter />);
    const minusBtn = screen.getByText("-");
    fireEvent.click(minusBtn);
    fireEvent.click(minusBtn);

    const isCorrectCountPresent = screen.getByText("Count is -2");
    expect(isCorrectCountPresent).toBeInTheDocument();
  });
});
