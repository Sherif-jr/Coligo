import { createSlice } from "@reduxjs/toolkit";

export type AuthState = {
  isLoggedIn: boolean;
};

const initialState: AuthState = { isLoggedIn: false };

export const adminSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;

      return state;
    },
    logout: (state) => {
      state.isLoggedIn = false;

      return state;
    },
  },
});

export const { login, logout } = adminSlice.actions;

export default adminSlice.reducer;
