import Results from "pages/Results";
import { cleanUpTests, renderWithProviders } from "test-utils";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Preference } from "app/userSlice";

describe("Results Page", () => {
  cleanUpTests();
  it("matches snapshot", () => {
    const { container } = renderWithProviders(<Results />);
    expect(container).toMatchInlineSnapshot(`
<div>
  <main
    class="sc-bczRLJ gVvZlw"
  >
    <div>
      Hey please 
      <a
        href="/user"
      >
        go back
      </a>
       a step and fill in your information
    </div>
    <section
      id="results"
    />
  </main>
</div>
`);
  });
  it("instucts users to go back a step if no user data is supplied", () => {
    renderWithProviders(<Results />);
    const linkEl = screen.getByRole("link", { name: /go back/i });
    userEvent.click(linkEl);
    expect(window.location.pathname).toContain("/user");
  });
  it("provides users with a personalized greeting based on their name preference", () => {
    const userName = "John Doe";
    const preference = Preference.series;
    const user = { user: { name: userName, preference } };
    const { container } = renderWithProviders(<Results />, user);
    expect(container).toHaveTextContent(userName);
    expect(container).toHaveTextContent(preference);
  });
});
