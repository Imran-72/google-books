import { ADD_QUERY_INPUT, FETCHED_BOOKS } from "./types";
import { HIDE_LOADER, SHOW_LOADER } from "d:/google-books/src/redux/types";

export function createQuery(text) {
  console.log(text);
  return {
    type: ADD_QUERY_INPUT,
    payload: text,
  };
}

export function showLoader() {
  return {
    type: SHOW_LOADER,
  };
}

export function hideLoader() {
  return {
    type: HIDE_LOADER,
  };
}

export function getBooks(query) {
  return async (dispatch) => {
    try {
      dispatch(showLoader());
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=40&startIndex=1`
      );
      if (!response.ok) {
        throw new Error("Ошибка запроса");
      }
      const data = await response.json();

      dispatch({ type: FETCHED_BOOKS, payload: data.items });
      dispatch(hideLoader());
    } catch (e) {
      console.log(e);
    }
  };
}
