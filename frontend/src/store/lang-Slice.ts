import { createSlice } from "@reduxjs/toolkit";

export type LangState = {
  lang: "en" | "es";
};

const initialState: LangState = { lang: "en" };

export const langSlice = createSlice({
  name: "lang",
  initialState: initialState,
  reducers: {
    changeLang: (state, action: { payload: LangState["lang"] }) => {
      state.lang = action.payload;

      return state;
    },
  },
});

export const { changeLang } = langSlice.actions;

export default langSlice.reducer;
