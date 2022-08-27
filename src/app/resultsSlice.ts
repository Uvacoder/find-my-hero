import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface resultsState {
  count: number;
  limit: number;
  offset: number;
  results: {}[] | null;
}

// Define the initial state using that type
const initialState: resultsState = {
  count: 0,
  limit: 0,
  offset: 0,
  results: null,
};

export const resultsSlice = createSlice({
  name: "results",
  initialState,
  reducers: {},
});

export const selectCount = (state: RootState) => state.results.count;
export const selectLimit = (state: RootState) => state.results.limit;
export const selectOffset = (state: RootState) => state.results.offset;
export const selectResults = (state: RootState) => state.results.results;

export default resultsSlice.reducer;
