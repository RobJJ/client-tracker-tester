const reducer = (state, action) => {
  // Handle the dispatch actions here
  if (action.type === "ADD_CLIENT") {
    const newClients = [...state.clients, action.payload];

    return {
      ...state,
      clients: newClients,
    };
  }
};

export default reducer;
