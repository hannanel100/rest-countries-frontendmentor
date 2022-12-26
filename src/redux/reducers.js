import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  query: "",
  region: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    setRegion: (state, action) => {
      state.region = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setQuery, setRegion } = searchSlice.actions;

export default searchSlice.reducer;
