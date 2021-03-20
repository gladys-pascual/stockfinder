import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NoInfo from "../NoInfo";

test("render NoInfo component as expected", () => {
  const { container } = render(
    <BrowserRouter>
      <NoInfo />
    </BrowserRouter>
  );

  expect(container).toMatchSnapshot();
});
