import thunk from "redux-thunk";
import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { tempReducer } from "./reducers/template_reducer";

const initialState = {
  tempReducer: []
};
const reducers = combineReducers({ tempReducer: tempReducer });
const storeEnhancers = composeWithDevTools(applyMiddleware(thunk));

export const store = createStore(reducers, initialState, storeEnhancers);
