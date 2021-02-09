React components in this folder are specific to the App.
They glue together components which manage their own state.
Components in the controllers folder also add custom business logic having access to global state and dispatch actions.
It is important to keep -components- which manage their own state internally separate from -controllers- which handle application state + dispatch actions.
The result is components which are easy to test and reuse + business logic which is easy to find and change as needed. 


Below is an example of using state and dispatch hooks in a controller component...

import { useAppState, useAppDispatch } from "../state/AppStore";

export default function AppGlueComponent() {
  const state = useAppState()
  const dispatch = useAppDispatch()

  console.log(state)
  console.log(dispatch)

  return (
    <pre>{state}</pre>
  );
}
