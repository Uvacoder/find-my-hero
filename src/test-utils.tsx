import { render, cleanup } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { defaultTheme } from "styles/theme";
import { getStoreWithState } from "app/store";
import React from "react";
import { RootState } from "app/store";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import persistStore from "redux-persist/lib/persistStore";

export const cleanUpTests = () => {
  afterEach(() => {
    cleanup();
  });
};

export const renderWithProviders = (
  element: React.ReactElement,
  state?: RootState
) => {
  const store = getStoreWithState(state);
  let persistor = persistStore(store);
  const utils = render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <ThemeProvider theme={defaultTheme}>{element}</ThemeProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
  return { store, ...utils };
};
