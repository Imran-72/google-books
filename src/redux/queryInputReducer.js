import { ADD_QUERY_INPUT } from "./types";

const initialState = {
  query: "",
};

export const queryInputReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_QUERY_INPUT:
      return { ...state, query: action.payload };
    default:
      return state;
  }
};
