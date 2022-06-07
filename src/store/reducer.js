let initialState = {
  count: 0
};
function reducer(state = initialState, action) {
  console.log(state, action);
  if (action.type === "add") {
    state.count++;
  } else if (action.type === "sub") {
    state.count--;
  }
  return { ...state };
}

export default reducer;
