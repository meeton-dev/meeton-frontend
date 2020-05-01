import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import { createReducer } from './reducers';

export const configureStore = () => {
  const store = createStore( /* createReducer(), */ applyMiddleware(thunk));
  return store;
};