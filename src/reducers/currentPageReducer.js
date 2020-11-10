const currentPageReducer = (state = "HOME", action) => {
  switch (action.type) {
    case "HOME":
      return "HOME";
    case "TODO":
      console.log("reducer todo");
      return "TODO";
    case "INFO":
      return "INFO";
    default:
      return state;
  }
};

export default currentPageReducer;
