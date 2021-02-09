const appInitialState = {
  count: 100,
  inc: 10,
  dec: 5
};

const appReducer = (state, action) => {
  let change = { ...state };

  switch (action.type) {
    case "CHANGE_VALUE": {
      change[action.data.which] = parseInt(action.data.value, 10) || 1;
      break;
    }
    case "INCREMENT": {
      change.count += state.inc;
      break;
    }
    case "DECREMENT": {
      change.count -= state.dec;
      break;
    }
    default: {
      console.error(`ERROR: Unhandled action type: ${action.type}`);
    }
  }

  return { ...change };
};

export { appInitialState, appReducer };
