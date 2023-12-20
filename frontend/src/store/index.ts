import { combineReducers, configureStore } from "@reduxjs/toolkit";
import backendApi from "./api-slice";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import authSlice from "./auth-slice";
import { UISlice } from "./ui-slice";
import langSlice from "./lang-Slice";

const persistConfig = {
  key: "coligo",
  storage,
};
const rootReducer = combineReducers({
  auth: authSlice,
  lang: langSlice,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: {
    root: persistedReducer,
    ui: UISlice.reducer,
    [backendApi.reducerPath]: backendApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(backendApi.middleware),
});

export default store;
