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
      <CounterButton
        label="Multiply"
        backgroundColor="#3e9651"
        clickHandler={() => dispatch({ type: "MULTIPLY" })}
      />
      <CounterButton
        label="Divide"
        backgroundColor="#922428"
        clickHandler={() => dispatch({ type: "DIVIDE" })}
      />
    </div>
  );
}

export { AppButtons };
