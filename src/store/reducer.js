import { INCREMENT, DECREMENT } from "./action.types";
let initialState = {
  count: 0
};
function reducer(state = initialState, { type, payload }) {
  console.log(state.count);
  switch (type) {
    case INCREMENT:
      return { count: state.count + payload };
    case DECREMENT:
      state.count--;
      return { ...state };
    default:
      return state;
  }
}

export default reducer;
