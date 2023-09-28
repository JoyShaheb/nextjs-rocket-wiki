"use client";
import { Provider } from "react-redux";
import { store, persistedStore } from "./index";
import React from "react";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider } from "next-themes";

export const ReduxProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistedStore}>
          {children}
        </PersistGate>
      </Provider>
    </ThemeProvider>
  );
};
