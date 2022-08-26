import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from "pages/Home";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "styles/theme";

describe("Home Page", () => {
  it("matches snapshot", () => {
    const { container } = render(
      <BrowserRouter>
        <ThemeProvider theme={defaultTheme}>
          <Home />
        </ThemeProvider>
      </BrowserRouter>
    );

    expect(container).toMatchInlineSnapshot(`
<div>
  <main
    class="sc-gsnTZi fanEYi"
  >
    <button
      class="sc-bczRLJ YWuwY"
    >
      Start
    </button>
  </main>
</div>
`);
  });
  it("gives users an option to proceed", async () => {
    render(
      <BrowserRouter>
        <ThemeProvider theme={defaultTheme}>
          <Home />
        </ThemeProvider>
      </BrowserRouter>
    );
    const startElement = await screen.findByRole("button");
    userEvent.click(startElement);
    expect(window.location.href).toBe("http://localhost/user");
  });
});
