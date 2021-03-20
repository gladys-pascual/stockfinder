import { render } from "@testing-library/react";
import LoadingMarketNews from "../LoadingMarketNews";

test("renders LoadingMarketNews component as expected", () => {
  const { container } = render(<LoadingMarketNews />);
  expect(container).toMatchSnapshot();
});
