import { render } from "@testing-library/react";
import Graph from "../Graph";

test("render Graph component as expected", () => {
  const props = {
    symbol: "AAPL",
  };

  const { container } = render(<Graph {...props} />);

  expect(container).toMatchSnapshot();
});
