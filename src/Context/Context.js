import React, { useContext, useState, useReducer, useEffect } from "react";
import reducer from "../Reducer/Reducer";
import { clientData } from "../Data/Data";
//
const AppContext = React.createContext();
//
// Initial State for Reducer
const initialState = {
  clients: clientData,
  loading: false,
  focused: {},
};
//
const clientTemplate = {
  name: "",
  email: "",
  contact: "",
  active: false,
  notes: [],
  receipts: { debits: [{}], credits: [{}] },
};
// Default Template for Debit Client
const debitTemplate = {
  date: "",
  amount: "",
  sessions: 0,
};
//
const AppProvider = ({ children }) => {
  // State varibales go here -
  const [state, dispatch] = useReducer(reducer, initialState);
  const [newClientInfo, setNewClientInfo] = useState(clientTemplate);
  // const [focusedClient, setFocusedClient] = useState({});
  // const [isFocused, setIsFocused] = useState(false);
  const [debitClient, setDebitClient] = useState(debitTemplate);
  // Functions to handle state actions -
  //
  // To add a new Client
  const submitNewClient = (e) => {
    e.preventDefault();
    dispatch({ type: "SUBMIT", payload: newClientInfo });
    setNewClientInfo(clientTemplate);
  };
  // To add a new debit reciept to existing client
  // const addDebitReciept = (e) => {
  //   e.preventDefault();
  //   // focusedClient.receipts.debits.push(debitClient);
  //   dispatch({ type: "DEBIT", payload: { debitClient } });
  //   setDebitClient(debitTemplate);
  // };
  const addDebitToClient = (e) => {
    e.preventDefault();
    console.log("LOGGED");
    dispatch({ type: "DEBIT_CLIENT", payload: { debitClient } });
  };

  //Return statement
  return (
    <AppContext.Provider
      value={{
        //Object of shared properties for App
        ...state,
        newClientInfo,
        setNewClientInfo,
        submitNewClient,
        // setFocusedClient,
        // focusedClient,
        // setIsFocused,
        // isFocused,
        debitClient,
        setDebitClient,
        dispatch,
        addDebitToClient,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
//
// Create custom hook for called context
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
