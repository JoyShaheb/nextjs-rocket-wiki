"use client";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { resetSystem, sysmtemSlice, themeSwitch } from "./Slices/System";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistedSystemReducer = persistReducer(
  {
    key: "system Settings",
    storage,
  },
  sysmtemSlice.reducer
);

export const store = configureStore({
  reducer: {
    system: persistedSystemReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({}).concat(),
  devTools: true,
});

export const persistedStore = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);

export {
  // system actions
  resetSystem,
  themeSwitch,
};
