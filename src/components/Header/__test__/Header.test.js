import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "../Header";

test("renders Header component as expected", () => {
  const { container } = render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
  expect(container).toMatchSnapshot();
});
