import { render, cleanup } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { defaultTheme } from "styles/theme";
import { getStoreWithState } from "app/store";
import React from "react";
import { RootState } from "app/store";
import { BrowserRouter } from "react-router-dom";

export const cleanUpTests = () => {
  afterEach(() => {
    cleanup();
    window.localStorage.clear();
  });
};

export const renderWithProviders = (
  element: React.ReactElement,
  state?: RootState
) => {
  const store = getStoreWithState(state);
  const utils = render(
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={defaultTheme}>{element}</ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
  return { store, ...utils };
};
