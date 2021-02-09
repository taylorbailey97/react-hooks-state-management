const appInitialState = {
  count: 100,
  inc: 10,
  dec: 5,
  mul: 2,
  div: 2
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
    case "MULTIPLY": {
      change.count *= state.mul;
      break;
    }
    case "DIVIDE": {
      change.count /= state.div;
      break;
    }
    default: {
      console.error(`ERROR: Unhandled action type: ${action.type}`);
    }
  }

  return { ...change };
};

export { appInitialState, appReducer };
