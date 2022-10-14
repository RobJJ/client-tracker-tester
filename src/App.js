import React from "react";
import { useGlobalContext } from "./Context/Context";
// Components
import ActiveClient from "./Active_Client/ActiveClient";
import ClientList from "./Client_List/ClientList";
import DebitCreditClient from "./Debit_Credit_Client/DebitCreditClient";
import ActiveClientReceipts from "./Active_Client_Receipts/ActiveClientReceipts";
import AddClient from "./Add_Client/AddClient";
//

//
//
function App() {
  //

  //
  return (
    <main className="w-full h-screen p-0 m-0 grid grid-cols-2 grid-rows-3">
      {/* LIST OF CLIENTS DISPLAYED */}
      <AddClient />
      {/* LIST OF CLIENTS DISPLAYED */}
      <ClientList />
      {/* DEBIT OR CREDIT CLIENT */}
      <DebitCreditClient />
      {/* ACTIVE CLIENT DISPLAYED */}
      <ActiveClient />
      {/* ACTIVE CLIENT RECEIPTS DISPLAYED */}
      <ActiveClientReceipts />
    </main>
  );
}

export default App;
