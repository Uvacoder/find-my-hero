import Header from "components/Header";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe("Header Component", () => {
  it("matches screenshot", () => {
    const { container } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(container).toMatchInlineSnapshot(`
<div>
  <header>
    <h1>
      <a
        href="/"
      >
        Find My Hero
      </a>
    </h1>
  </header>
</div>
`);
  });
  it("renders a link to home", async () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const linkEl = await screen.findByRole("link");
    userEvent.click(linkEl);
    expect(window.location.href).toBe("http://localhost/");
  });
});
