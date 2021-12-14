import { FETCHED_BOOKS } from "d:/google-books/src/redux/types";

const initialState = {
  books: [],
};

export const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHED_BOOKS:
      return { books: state.books.concat(action.payload) };
    default:
      return state;
  }
};
