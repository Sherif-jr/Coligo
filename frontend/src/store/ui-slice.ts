import { createSlice } from "@reduxjs/toolkit";

export type UIState = {
  sildeBarOpen: boolean;
};

const initialState: UIState = { sildeBarOpen: false };

export const UISlice = createSlice({
  name: "ui",
  initialState: initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.sildeBarOpen = !state.sildeBarOpen;

      return state;
    },
  },
});

export const { toggleSidebar } = UISlice.actions;

export default UISlice;
