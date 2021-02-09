AppStore manages context and exports custom hooks for useAppState and useAppDispatch
AppReducer is where new ACTION_TYPES are added and is the only file you should need to mess with
Any controller component can useAppState and will automatically re-render anytime the state it is using changes...

import { useAppState } from "../state/AppStore";

export default function AppComponent() {
  const state = useAppState()
  return (
    <pre>{state}</pre>
  );
}


Any controller component can useAppDispatch to trigger a possible state change. 
every action dispatched should send an object with a type property defined as a 'UNIQUE_UPPER_CASE_STRING' for the AppReducer to key off of
a dispatched action may also have a data property to pass along anything the AppReducer may need to update the state...

import { useAppDispatch } from "../state/AppStore";

export default function AppComponent() {
  const dispatch = useAppDispatch()
  const action = {
    type: "YO_WAS_CLICKED",
    data: { "key1": "value1", "key2": "value2" }
  }
  return (
    <button onClick={() => dispatch( action )}>YO</button>
  );
}
