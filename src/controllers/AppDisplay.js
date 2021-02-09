import React from "react";
import { useAppState } from "../state/AppStore";
import { CounterDisplay } from "../components/CounterDisplay";

function AppDisplay() {
  const state = useAppState();
  return (
    <div className="box">
      <div className="comment">AppDisplay uses AppState</div>
      <CounterDisplay count={state.count} />
    </div>
  );
}

export { AppDisplay };
