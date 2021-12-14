import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { booksReducer } from "./booksReducer";
import { queryInputReducer } from "./queryInputReducer";

const rootReducer = combineReducers({
  books: booksReducer,
  query: queryInputReducer,
  // loader: appReducer,
});

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
