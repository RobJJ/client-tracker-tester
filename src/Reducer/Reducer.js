//
//
const reducer = (state, action) => {
  if (action.type === "SUBMIT") {
    return {
      ...state,
      clients: [...state.clients, { ...action.payload, active: true }],
    };
  }
  return state;
};

export default reducer;
