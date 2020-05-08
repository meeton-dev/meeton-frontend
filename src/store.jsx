import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reduceReducers from "reduce-reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers";

export const configureStore = () => {
  const store = createStore(
    reduceReducers(reducers),
    composeWithDevTools(applyMiddleware(thunk))
  );
  return store;
};
