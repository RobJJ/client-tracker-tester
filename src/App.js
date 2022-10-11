import React, { useState, useReducer } from "react";
import reducer from "./Reducer/Reducer";
//
import AddClient from "./Add_client/AddClient";
import ViewClient from "./View_client/ViewClient";
import CreditClient from "./Credit_client/CreditClient";
import DebitClient from "./Debit_client/DebitClient";
//
//
// Set initial state for reducer
const initialState = {
  clients: [],
};
//
//
function App() {
  const [client, setClient] = useState({ name: "", notes: "", id: "" });
  const [state, dispatch] = useReducer(reducer, initialState);
  //
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  //
  return (
    <main className="w-full h-screen p-0 m-0 grid grid-cols-2 grid-rows-2">
      {/* ADD CLIENT SECTION */}
      <AddClient
        setClient={setClient}
        client={client}
        handleSubmit={handleSubmit}
        dispatch={dispatch}
      />
      {/* DEBIT CLIENT SECTION */}
      <DebitClient state={state} />
      {/* CREDIT CLIENT SECTION */}
      <CreditClient />
      {/* VIEW CLIENT SECTION */}
      <ViewClient state={state} />
    </main>
  );
}

export default App;
