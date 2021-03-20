import { render } from "@testing-library/react";
import News from "../News";

test("render News component as expected", () => {
  const props = {
    news: {
      category: "top news",
      datetime: 1616201855,
      headline:
        "NCAA weight room discrepancy shows 'they don't think these women are worth it,' says Jemele Hill",
      image:
        "https://image.cnbcfm.com/api/v1/image/106441745-1584104407165gettyimages-1137152686.jpeg?v=1584104447",
      source: "CNBC",
      summary:
        "A Stanford University sports performance coach posted photos to Twitter Thursday revealing inequities between the women's and men's weight rooms.",
      url:
        "https://www.cnbc.com/2021/03/19/jemele-hill-ncaa-weight-room-discrepancy-reflects-chronic-gender-inequality.html",
    },
  };

  const { container } = render(<News {...props} />);

  expect(container).toMatchSnapshot();
});
