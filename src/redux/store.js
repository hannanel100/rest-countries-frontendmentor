import { configureStore } from "@reduxjs/toolkit";
import { searchSlice } from "./reducers";
export const store = configureStore({
  reducer: {
    search: searchSlice.reducer,
  },
});
