import { SET_EXAMPLE } from "../types/actionTypes";

const initialState = {
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_EXAMPLE: {
      //Add logic

      return {
        ...state
      };
    }
    default:
      return state;
  }
}
