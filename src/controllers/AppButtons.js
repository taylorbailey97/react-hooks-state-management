import React from "react";
import { useAppDispatch } from "../state/AppStore";
import { CounterButton } from "../components/CounterButton";

function AppButtons() {
  const dispatch = useAppDispatch();

  return (
    <div className="box">
      <div className="comment">AppButtons uses AppDispatch</div>
      <CounterButton
        label="Increment"
        backgroundColor="#3e9651"
        clickHandler={() => dispatch({ type: "INCREMENT" })}
      />
      <CounterButton
        label="Decrement"
        backgroundColor="#922428"
        clickHandler={() => dispatch({ type: "DECREMENT" })}
      />
    </div>
  );
}

export { AppButtons };
