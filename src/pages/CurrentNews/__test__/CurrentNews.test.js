import { render } from "@testing-library/react";
import CurrentNews from "../CurrentNews";

test("render CurrentNews component as expected", () => {
  const { container } = render(<CurrentNews />);

  expect(container).toMatchSnapshot();
});
