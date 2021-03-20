import { render } from "@testing-library/react";
import AnalysisBarChart from "../AnalysisBarChart";

test("render Analysis component as expectetd", () => {
  const props = {
    strongBuy: 13,
    buy: 23,
    hold: 8,
    sell: 1,
    strongSell: 1,
    total: 46,
  };

  const { container } = render(<AnalysisBarChart {...props} />);

  expect(container).toMatchSnapshot();
});
