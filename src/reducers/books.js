import { CREATE_BOOK, DELETE_BOOK } from "../actions/actionType";

const booksReducer = (state = [], action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [...state, action.payload];
    case DELETE_BOOK:
      return [...state.filter(book => book.id !== action.payload)];
    default:
      return state;
  }
};

export default booksReducer;
