//
//
const reducer = (state, action) => {
  if (action.type === "SUBMIT") {
    return {
      ...state,
      clients: [...state.clients, { ...action.payload, active: true }],
    };
  }
  if (action.type === "CAMS_MAGIC") {
    return {
      ...state,
      focused: { ...action.payload },
    };
  }
  if (action.type === "DEBIT_CLIENT") {
    const updatedClients = state.clients.map((client) => {
      if (client.name === state.focused.name) {
        return {
          ...client,
          receipts: {
            ...client.receipts,
            debits: [
              ...client.receipts.debits,
              { ...action.payload.debitClient },
            ],
          },
        };
      }
      return client;
    });
    return {
      ...state,
      clients: updatedClients,
    };

    // const client = action.payload.focusedClient;
    // const debitToAdd = action.payload.debitClient;
    // client.receipts.debits.push(debitToAdd);
    console.log("BOOM");
    // action.payload.focusedClient.receipts.debits.push(
    //   action.payload.debitClient
    // state.focused = {
    //   ...state.focused,
    //   receipts: {
    //     ...state.focused.receipts,
    //     debits: [...state.focused.receipts.debits, action.payload.debitClient],
    //   },
    // };
    // let clientToWorkWith = state.clients.find(
    //   (client) => client.name === state.focused.name
    // );
    // let filteredClients = state.clients.filter(
    //   (client) => client.name !== clientToWorkWith.name
    // );
    // return {
    //   ...state,
    //   clients: [...filteredClients, state.focused],
    // };
  }
  return state;
};

export default reducer;
