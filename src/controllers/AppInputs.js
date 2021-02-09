import React from "react";
import { useAppState, useAppDispatch } from "../state/AppStore";
import { CounterInput } from "../components/CounterInput";

function AppInputs() {
  const state = useAppState();
  const dispatch = useAppDispatch();

  return (
    <div className="box">
      <div className="comment">
        AppInputs uses both AppState and AppDispatch
      </div>
      <CounterInput
        label="Increment"
        value={state.inc}
        color="#3e9651"
        changeHandler={e =>
          dispatch({
            type: "CHANGE_VALUE",
            data: { which: "inc", value: e.target.value }
          })
        }
      />
      <CounterInput
        label="Decrement"
        value={state.dec}
        color="#922428"
        changeHandler={e =>
          dispatch({
            type: "CHANGE_VALUE",
            data: { which: "dec", value: e.target.value }
          })
        }
      />
    </div>
  );
}

export { AppInputs };
