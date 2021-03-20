import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Stock from "../Stock";

test("render Stock component as expected", () => {
  const { container } = render(
    <BrowserRouter>
      <Stock />
    </BrowserRouter>
  );

  expect(container).toMatchSnapshot();
});
