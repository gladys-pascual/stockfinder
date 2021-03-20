import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

test("renders learn react link", () => {
  const { container } = render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});
