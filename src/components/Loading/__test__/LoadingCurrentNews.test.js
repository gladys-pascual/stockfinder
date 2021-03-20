import { render } from "@testing-library/react";
import LoadingCurrentNews from "../LoadingCurrentNews";

test("renders LoadingCurrentNews component as expected", () => {
  const { container } = render(<LoadingCurrentNews />);
  expect(container).toMatchSnapshot();
});
