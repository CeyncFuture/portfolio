import { SET_EXAMPLE } from "../types/actionTypes";

let nextTodoId = 0;

export const change = item => ({
  type: SET_EXAMPLE,
  payload: item
});

