import { render } from "@testing-library/react";
import Search from "../Search";

test("render Search component as expected", () => {
  const { container } = render(<Search />);

  expect(container).toMatchSnapshot();
});
