import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from "pages/Home";
import { cleanUpTests, renderWithProviders } from "test-utils";

describe("Home Page", () => {
  cleanUpTests();
  it("matches snapshot", () => {
    const { container } = renderWithProviders(<Home />);
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
    renderWithProviders(<Home />);
    const startElement = await screen.findByRole("button");
    userEvent.click(startElement);
    expect(window.location.href).toBe("http://localhost/user");
  });
});
