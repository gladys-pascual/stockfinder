import { render } from "@testing-library/react";
import CompanySummary from "../CompanySummary";

test("render CompanySummary component as expected", () => {
  const props = {
    companyName: "Apple Inc",
    ticker: "AAPL",
    industry: "Technology",
    currentPrice: 120.62,
    openPrice: 119.9,
    prevClose: 120.53,
    high: 121.43,
    low: 119.675,
    marketCap: 2023469,
    ipo: "1980-12-12",
  };

  const { container } = render(<CompanySummary {...props} />);

  expect(container).toMatchSnapshot();
});
