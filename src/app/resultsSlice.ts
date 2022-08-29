import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { MarvelResult } from "services/marvelRequests";

interface resultsState {
  count: number;
  offset: number;
  results: MarvelResult[] | [];
}

// Define the initial state using that type
const initialState: resultsState = {
  count: 0,
  offset: 0,
  results: [],
};

export const resultsSlice = createSlice({
  name: "results",
  initialState,
  reducers: {
    updateResults: (state, action: PayloadAction<MarvelResult[]>) => {
      state.results = action.payload;
    },
    updateCount: (state, action: PayloadAction<number>) => {
      state.count = action.payload;
    },
    updateOffset: (state) => {
      state.offset = state.offset + state.count;
    },
    clearResults: (state) => {
      state.results = [];
    },
  },
});

export const { updateResults, updateCount, updateOffset, clearResults } =
  resultsSlice.actions;
export const selectCount = (state: RootState) => state.results.count;
export const selectOffset = (state: RootState) => state.results.offset;
export const selectResults = (state: RootState) => state.results.results;

export default resultsSlice.reducer;
