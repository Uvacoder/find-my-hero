import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { defaultTheme } from "styles/theme";
import { store } from "app/store";
import React from "react";

export const renderWithProviders = (Component: React.FC) => {
  return render(
    <Provider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <Component />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
};
