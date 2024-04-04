import { it, expect } from "vitest";

import { render, fireEvent } from "@testing-library/react";

import BoxList from "./BoxList";


it("renders without crashing", function () {
  render(<BoxList />);
});


it("matches snapshot", function () {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});


it("can add a new box", function () {
  const { container, getByLabelText, queryByText, getElementsByClassName} = render(<BoxList />);
  console.log(container.getElementsByClassName("Box"))

  // no items yet
  expect(container.getElementsByClassName("Box")[0] || null).not.toBeInTheDocument();

  const heightInput = getByLabelText("Height:");
  const widthInput = getByLabelText("Width:");
  const colorInput = getByLabelText("Background color:");
  const submitBtn = queryByText("Add new box!");

  // fill out the form
  fireEvent.change(heightInput, { target: { value: 100 } });
  fireEvent.change(widthInput, { target: { value: 100 } });
  fireEvent.change(colorInput, { target: { value: "blue" } });
  fireEvent.click(submitBtn);

  // item exists!
  expect(container.getElementsByClassName("Box")[0]).toBeInTheDocument();

});