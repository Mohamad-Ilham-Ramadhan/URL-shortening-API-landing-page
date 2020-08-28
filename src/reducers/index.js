import { combineReducers } from "redux";
import links from "./links";
import loading from "./loading";
import validate from "./validate";
import input from "./input";
import errorDialog from "./errorDialog";

const reducer = combineReducers({
  links,
  loading,
  validate,
  input,
  errorDialog,
});

export default reducer;
