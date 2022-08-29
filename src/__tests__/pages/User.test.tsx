import { screen } from "@testing-library/react";
import User from "pages/User";
import userEvent from "@testing-library/user-event";
import { cleanUpTests, renderWithProviders } from "test-utils";

describe("User Page", () => {
  cleanUpTests();
  it("matches snapshot", () => {
    const { container } = renderWithProviders(<User />);
    expect(container).toMatchInlineSnapshot(`
<div>
  <main
    class="sc-bczRLJ gVvZlw"
  >
    <h2>
      Tell Us About You
    </h2>
    <form>
      <div
        class="form-control"
      >
        <label
          for="name"
        >
          Your Name
        </label>
        <input
          id="name"
          pattern="[a-zA-Z]*"
          required=""
          type="text"
          value=""
        />
      </div>
      <div
        class="form-control"
      >
        <p>
          What Do You Like More
        </p>
        <div>
          <input
            id="comics"
            name="preference"
            required=""
            type="radio"
            value="comics"
          />
          <label
            for="comics"
          >
            Comics
          </label>
          <input
            id="series"
            name="preference"
            type="radio"
            value="series"
          />
          <label
            for="series"
          >
            Series
          </label>
          <input
            id="stories"
            name="preference"
            type="radio"
            value="stories"
          />
          <label
            for="stories"
          >
            Stories
          </label>
        </div>
      </div>
      <button
        type="reset"
      >
        Clear
      </button>
      <button
        disabled=""
        type="submit"
      >
        Next
      </button>
    </form>
  </main>
</div>
`);
  });
  it("starts with a blank input for a users name", () => {
    renderWithProviders(<User />);
    const nameInput = screen.getByRole("textbox", { name: /your name/i });
    expect(nameInput).toHaveTextContent("");
  });
  it("allows users to type in their name", () => {
    const userName = "Chuck Norris";
    renderWithProviders(<User />);
    const nameInput = screen.getByRole("textbox", { name: /your name/i });
    userEvent.type(nameInput, userName);
    expect(nameInput).toHaveValue(userName);
    userEvent.clear(nameInput);
  });
  it("allows users to select only one preference", () => {
    renderWithProviders(<User />);
    const preferences = screen.getAllByRole("radio");
    userEvent.click(preferences[0]);
    expect(preferences[0]).toBeChecked();
    expect(preferences[1]).not.toBeChecked();
    expect(preferences[2]).not.toBeChecked();
    userEvent.click(preferences[1]);
    expect(preferences[0]).not.toBeChecked();
    expect(preferences[2]).not.toBeChecked();
    userEvent.click(preferences[2]);
    expect(preferences[0]).not.toBeChecked();
    expect(preferences[1]).not.toBeChecked();
  });
  it("gets the users name from local storage", async () => {
    const userName = "John Doe";
    renderWithProviders(<User />);
    const nameInput = screen.getByRole("textbox", { name: /your name/i });
    expect(nameInput).toHaveValue(userName);
  });
  it("gets the users preference from local storage", async () => {
    const userPreference = "comics";
    renderWithProviders(<User />);
    const radioInput = screen.getByRole("radio", { name: /comics/i });
    expect(radioInput).toBeChecked();
  });
  it("allows users to all fields", () => {
    renderWithProviders(<User />);
    const userInput = "fjsdkfljsdkl";
    const nameInput = screen.getByRole("textbox", { name: /your name/i });
    const clearButton = screen.getByRole("button", { name: /clear/i });
    const preferences = screen.getAllByRole("radio");
    const randomPreference =
      preferences[Math.floor(Math.random() * preferences.length)];
    userEvent.type(nameInput, userInput);
    userEvent.click(randomPreference);
    expect(nameInput).toHaveValue(userInput);
    expect(randomPreference).toBeChecked();
    userEvent.click(clearButton);
    expect(nameInput).toHaveValue("");
    expect(randomPreference).not.toBeChecked();
  });
  it("does not allow users to progress if all inputs are blank", () => {
    renderWithProviders(<User />);
    const submitButton = screen.getByRole("button", {
      name: /next/i,
    });
    expect(submitButton).toBeDisabled();
    const userInput = "fjsdkfljsdkl";
    const nameInput = screen.getByRole("textbox", { name: /your name/i });
    userEvent.type(nameInput, userInput);
    expect(submitButton).toBeDisabled();
    userEvent.click(screen.getByRole("button", { name: /clear/i }));
    const preferences = screen.getAllByRole("radio");
    const randomPreference =
      preferences[Math.floor(Math.random() * preferences.length)];
    userEvent.click(randomPreference);
    expect(submitButton).toBeDisabled();
    userEvent.type(nameInput, userInput);
    expect(submitButton).not.toBeDisabled();
  });
});
