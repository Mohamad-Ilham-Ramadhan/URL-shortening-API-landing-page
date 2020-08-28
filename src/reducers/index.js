import { combineReducers } from "redux";
import links from "./links";
import input from "./input";

const reducer = combineReducers({ links, input });

export default reducer;
