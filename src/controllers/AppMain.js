import React from "react";
import { AppProvider } from "../state/AppStore";
import { AppDisplay } from "./AppDisplay";
import { AppInputs } from "./AppInputs";
import { AppButtons } from "./AppButtons";

export default function AppMain() {
  return (
    <AppProvider>
      <AppDisplay />
      <AppInputs />
      <AppButtons />
    </AppProvider>
  );
}
