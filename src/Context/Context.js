import React, { useContext, useState, useReducer, useEffect } from "react";
import reducer from "../Reducer/Reducer";
import { clientData } from "../Data/Data";

//
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
  id: "",
  active: false,
  notes: [],
  receipts: { debits: [], credits: [] },
  balance: 0,
};
// Default Template for Debit and Credit Info
const debitTemplate = {
  date: "",
  id: "",
  amount: "",
  sessions: 0,
};
const creditTemplate = {
  date: "",
  id: "",
  sessions: 0,
};
//
const AppProvider = ({ children }) => {
  // State varibales go here -
  const [state, dispatch] = useReducer(reducer, initialState);
  const [newClientInfo, setNewClientInfo] = useState(clientTemplate);
  const [debitInfo, setDebitInfo] = useState(debitTemplate);
  const [creditInfo, setCreditInfo] = useState(creditTemplate);
  // Functions to handle state actions -
  //
  // To add a new Client
  const submitNewClient = (e) => {
    e.preventDefault();
    dispatch({ type: "SUBMIT", payload: newClientInfo });
    setNewClientInfo(clientTemplate);
  };
  // To add a receipt - debit to client
  const addDebitToClient = (e) => {
    e.preventDefault();
    //
    dispatch({ type: "DEBIT_CLIENT", payload: { debitInfo } });
    dispatch({ type: "UPDATE_FOCUS" });
    setDebitInfo(debitTemplate);
  };
  // To add a recipet - credit to client
  const addCreditToClient = (e) => {
    e.preventDefault();
    //
    dispatch({ type: "CREDIT_CLIENT", payload: { creditInfo } });
    dispatch({ type: "UPDATE_FOCUS" });
    setCreditInfo(creditTemplate);
  };
  //
  // const listReceipts = (client) => {
  //   dispatch({ type: "LIST_RECEIPTS", payload: client });
  // };
  //Return statement
  return (
    <AppContext.Provider
      value={{
        //Object of shared properties for App
        ...state,
        newClientInfo,
        setNewClientInfo,
        submitNewClient,
        debitInfo,
        setDebitInfo,
        creditInfo,
        setCreditInfo,
        dispatch,
        addDebitToClient,
        addCreditToClient,
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
