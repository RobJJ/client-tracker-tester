import React, { useState } from "react";
import { useGlobalContext } from "../Context/Context";

//
//
const DebitCreditClient = () => {
  //
  const {
    debitClient,
    setDebitClient,
    addDebitReciept,
    focused,
    dispatch,
    addDebitToClient,
  } = useGlobalContext();
  //
  if (Object.keys(focused).length === 0) {
    return (
      <div className="bg-pink-700 flex justify-center items-center">
        <div className="bg-white w-5/6 h-5/6 text-center pt-2 underline">
          SELECT A CLIENT TO VIEW
        </div>
      </div>
    );
  }
  //
  return (
    <div className="bg-orange-300 flex justify-center items-center">
      <div className="bg-white w-5/6 h-5/6 flex flex-col text-center">
        <section className="underline">{focused.name}</section>
        {/* DEBIT SECTION */}
        <form onSubmit={addDebitToClient} className="flex flex-col">
          <div>** Handle your received payments **</div>
          <div className="ml-2 flex gap-5 ">
            <h2>Payment Date: </h2>
            <input
              type="date"
              value={debitClient.date}
              onChange={(e) =>
                setDebitClient({ ...debitClient, date: e.target.value })
              }
            />
          </div>
          <div className="ml-2 flex gap-5 ">
            <h2>Payment Amount: </h2>
            <input
              type="text"
              value={debitClient.amount}
              onChange={(e) =>
                setDebitClient({ ...debitClient, amount: e.target.value })
              }
              className="border"
            />
          </div>
          <div className="ml-2 flex gap-5 ">
            <h2>Classes Added: </h2>
            <input
              type="number"
              value={debitClient.sessions}
              onChange={(e) =>
                setDebitClient({ ...debitClient, sessions: e.target.value })
              }
              className="border"
            />
          </div>
          <div>
            <button type="submit" className="bg-gray-300 rounded ">
              Debit Client
            </button>
          </div>
        </form>
        {/* CREDIT SECTION */}
        <section className="flex flex-col">
          <div>** Handle Sessions Clients have used **</div>
          <div className="gap-5 ml-2 flex">
            <h2>Class Date: </h2>
            <input type="date" />
          </div>
          <div className="gap-5 ml-2 flex">
            <h2>Classes Used: </h2>
            <input type="number" className="border" />
          </div>
          <div>
            <button className="bg-gray-300 rounded">Credit Client</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DebitCreditClient;
