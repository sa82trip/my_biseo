import { combineReducers } from "redux";
import isLoadingReducer from "./isLoadingReducer";
import currentPageReducer from "./currentPageReducer";

const rootReducer = combineReducers({ isLoadingReducer, currentPageReducer });

export default rootReducer;
