import { render } from "@testing-library/react";
import CompanyNews from "../CompanyNews";

test("render CompanyNews component as expected", () => {
  const props = {
    symbol: "AAPL",
    companyName: "Apple Inc",
  };

  const { container } = render(<CompanyNews {...props} />);

  expect(container).toMatchSnapshot();
});
