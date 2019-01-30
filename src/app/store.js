import thunk from "redux-thunk";
import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { mangaList, mangaInfo } from "./reducers/manga_reducers";

const initialState = {
  mangaList: {},
  mangaInfo: {}
};

const reducers = combineReducers({
  mangaList: mangaList,
  mangaInfo: mangaInfo
});

const storeEnhancers = composeWithDevTools(applyMiddleware(thunk));

export const store = createStore(reducers, initialState, storeEnhancers);
