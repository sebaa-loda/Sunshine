import { createStore, applyMiddleware, compose } from 'redux';
import {thunk} from 'redux-thunk'; 
import reducer from './reducer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
  reducer,
  composeEnhancer(applyMiddleware(thunk)) 
);
console.log();
export default store;