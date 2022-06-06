import { render } from "@testing-library/react";

it("renders div on the page", () => {
  const renderedDiv = render(<div>hello</div>);

  renderedDiv.getByText("hello");
});
