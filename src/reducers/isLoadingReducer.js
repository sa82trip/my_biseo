const loadingStatusReducer = (state = true, action) => {
  switch (action.type) {
    case "REVERSE": {
      return { status: false };
    }
    default: {
      return state;
    }
  }
};

export default loadingStatusReducer;
