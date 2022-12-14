import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export enum Preference {
  series = "series",
  stories = "stories",
  comics = "comics",
}
// Define a type for the slice state
interface userState {
  name: string;
  preference: Preference | null;
}

// Define the initial state using that type
const initialState: userState = {
  name: "",
  preference: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    updatePreference: (state, action: PayloadAction<Preference | null>) => {
      state.preference = action.payload;
    },
    clearUser: (state) => {
      state.name = "";
      state.preference = null;
    },
  },
});

export const { updateName, updatePreference, clearUser } = userSlice.actions;
export const selectName = (state: RootState) => state.user.name;
export const selectPreference = (state: RootState) => state.user.preference;

export default userSlice.reducer;
