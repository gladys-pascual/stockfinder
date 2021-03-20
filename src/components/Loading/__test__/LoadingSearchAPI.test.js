import { render } from "@testing-library/react";
import LoadingSearchAPI from "../LoadingSearchAPI";

test("renders LoadingSearchAPI component as expected", () => {
  const { container } = render(<LoadingSearchAPI />);
  expect(container).toMatchSnapshot();
});
