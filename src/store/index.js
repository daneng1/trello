import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import columnReducer from "./column.js";
import cardReducer from "./card.js";

let reducers = combineReducers({
  columnReducer,
  cardReducer,
});
const store = () => {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
};

export default store();
