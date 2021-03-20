import { render } from "@testing-library/react";
import Analysis from "../Analysis";

test("render Analysis component as expectetd", () => {
  const props = {
    symbol: "AAPL",
    companyName: "Apple Inc",
  };

  const { container } = render(<Analysis {...props} />);

  expect(container).toMatchSnapshot();
});
