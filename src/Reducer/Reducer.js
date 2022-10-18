//
import { v4 as uuidv4 } from "uuid";
//
const reducer = (state, action) => {
  //
  if (action.type === "SUBMIT") {
    return {
      ...state,
      clients: [
        ...state.clients,
        { ...action.payload, active: true, id: uuidv4() },
      ],
    };
  }
  //
  //
  if (action.type === "CAMS_MAGIC") {
    return {
      ...state,
      focused: { ...action.payload },
    };
  }
  //
  if (action.type === "UPDATE_FOCUS") {
    const updatedFocus = state.clients.find(
      (client) => client.id === state.focused.id
    );
    return {
      ...state,
      focused: updatedFocus,
    };
  }
  //
  if (action.type === "DEBIT_CLIENT") {
    const updatedClients = state.clients.map((client) => {
      if (client.name === state.focused.name) {
        return {
          ...client,
          receipts: {
            ...client.receipts,
            debits: [
              ...client.receipts.debits,
              { ...action.payload.debitInfo, id: uuidv4() },
            ],
          },
          balance:
            Number(client.balance) + Number(action.payload.debitInfo.sessions),
        };
      }
      return client;
    });
    return {
      ...state,
      clients: updatedClients,
    };
  }
  //
  if (action.type === "CREDIT_CLIENT") {
    const updatedClients = state.clients.map((client) => {
      if (client.name === state.focused.name) {
        return {
          ...client,
          receipts: {
            ...client.receipts,
            credits: [
              ...client.receipts.credits,
              { ...action.payload.creditInfo, id: uuidv4() },
            ],
          },
          balance:
            Number(client.balance) - Number(action.payload.creditInfo.sessions),
        };
      }
      return client;
    });
    return {
      ...state,
      clients: updatedClients,
    };
  }
  //

  return state;
};

export default reducer;
