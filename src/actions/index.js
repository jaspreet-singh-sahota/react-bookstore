import { DELETE_BOOK, CHANGE_FILTER, CREATE_BOOK } from "../../../bookstore/src/actions/actionType";

export const createBook = book => ({
  type: CREATE_BOOK,
  payload: book,
});

export const deleteBook = book => ({
  type: DELETE_BOOK,
  payload: book.id,
});

export const changeFilter = category => ({
  type: CHANGE_FILTER,
  payload: category,
});

