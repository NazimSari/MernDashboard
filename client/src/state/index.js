import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "dark",
};

export const glabalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

export const { setMode } = glabalSlice.actions;

export default glabalSlice.reducer;
