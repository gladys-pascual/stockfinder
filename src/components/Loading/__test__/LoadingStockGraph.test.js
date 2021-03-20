import { render } from "@testing-library/react";
import LoadingStockGraph from "../LoadingStockGraph";

test("renders LoadingStockGraph component as expected", () => {
  const { container } = render(<LoadingStockGraph />);
  expect(container).toMatchSnapshot();
});
