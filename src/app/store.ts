import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
const reducer = { user: userReducer };
export const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export function getStoreWithState(preloadedState?: RootState) {
  return configureStore({ reducer, preloadedState });
}
