import { createStore, combineReducers } from "redux";
import reducers from "./reducers";

const reducer = combineReducers({ links: reducers });

const store = createStore(reducer);

export default store;
