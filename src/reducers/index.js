import { combineReducers } from 'redux';
import booksReducer from './books';
import filter from "./filter";

const rootReducer = combineReducers({
  book: booksReducer,
  filter: filter
});

export default rootReducer;
