Most React apps perform very well using one context for AppState (how things render) and one context for AppDispatch (how things update)
https://kentcdodds.com/blog/how-to-use-react-context-effectively

Using the following pattern from this codesandbox ensures separation of concerns and unidirectional data flow...

Step 1 -- Build and test your React components in isolation (found in the `components` folder)
Step 2 -- Create an AppReducer and AppStore to export AppProvider and custom hooks (found in `state` folder)
Step 3 -- Build app specific components using the custom hooks AppStore.useAppState() and/or AppStore.useAppDispatch() as needed (found in `controllers` folder)

