import { INCREMENT, DECREMENT } from "./action.types";
let initialState = {
  count: 0
};
function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      state.count++;
      return { ...state };
    case DECREMENT:
      state.count--;
      return { ...state };
    default:
      return state;
  }
}

export default reducer;
