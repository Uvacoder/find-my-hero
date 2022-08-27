import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import resultsReducer from "./resultsSlice";
const reducer = { user: userReducer, results: resultsReducer };
export const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export function getStoreWithState(preloadedState?: RootState) {
  return configureStore({ reducer, preloadedState });
}
