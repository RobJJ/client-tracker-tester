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
//
const AppProvider = ({ children }) => {
  // State varibales go here -
  const [state, dispatch] = useReducer(reducer, initialState);
  const [newClientInfo, setNewClientInfo] = useState(clientTemplate);
  const [focusedClient, setFocusedClient] = useState({});
  const [isFocused, setIsFocused] = useState(false);
  // Functions to handle state actions -
  const submit = (e) => {
    e.preventDefault();
    dispatch({ type: "SUBMIT", payload: newClientInfo });
    setNewClientInfo(clientTemplate);
  };
  //Return statement
  return (
    <AppContext.Provider
      value={{
        //Object of shared properties for App
        ...state,
        newClientInfo,
        setNewClientInfo,
        submit,
        setFocusedClient,
        focusedClient,
        setIsFocused,
        isFocused,
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
