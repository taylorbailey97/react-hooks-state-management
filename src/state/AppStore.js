import React from "react";
import { appInitialState, appReducer } from "./AppReducer";

const AppStateContext = React.createContext();
const AppDispatchContext = React.createContext();

function AppProvider({ children }) {
  const [state, dispatch] = React.useReducer(appReducer, appInitialState);
  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
}

function useAppState() {
  const context = React.useContext(AppStateContext);
  if (context === undefined) {
    throw new Error("ERROR: useAppState must be used inside of AppProvider");
  }
  return context;
}

function useAppDispatch() {
  const context = React.useContext(AppDispatchContext);
  if (context === undefined) {
    throw new Error("ERROR: useAppDispatch must be used inside of AppProvider");
  }
  return context;
}

export { AppProvider, useAppState, useAppDispatch };
