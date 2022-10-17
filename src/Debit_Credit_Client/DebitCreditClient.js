import React, { useState } from "react";
import { useGlobalContext } from "../Context/Context";

//
//
const DebitCreditClient = () => {
  //
  const {
    debitInfo,
    setDebitInfo,
    creditInfo,
    setCreditInfo,
    focused,
    addDebitToClient,
    addCreditToClient,
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
              value={debitInfo.date}
              onChange={(e) =>
                setDebitInfo({ ...debitInfo, date: e.target.value })
              }
            />
          </div>
          <div className="ml-2 flex gap-5 ">
            <h2>Payment Amount: </h2>
            <input
              type="text"
              value={debitInfo.amount}
              onChange={(e) =>
                setDebitInfo({ ...debitInfo, amount: e.target.value })
              }
              className="border"
            />
          </div>
          <div className="ml-2 flex gap-5 ">
            <h2>Sessions Added: </h2>
            <input
              type="number"
              value={debitInfo.sessions}
              onChange={(e) =>
                setDebitInfo({ ...debitInfo, sessions: e.target.value })
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
        <form onSubmit={addCreditToClient} className="flex flex-col">
          <div>** Handle Sessions Clients have used **</div>
          <div className="gap-5 ml-2 flex">
            <h2>Class Date: </h2>
            <input
              type="date"
              value={creditInfo.date}
              onChange={(e) =>
                setCreditInfo({ ...creditInfo, date: e.target.value })
              }
            />
          </div>
          <div className="gap-5 ml-2 flex">
            <h2>Sessions Used: </h2>
            <input
              type="number"
              className="border"
              value={creditInfo.sessions}
              onChange={(e) =>
                setCreditInfo({ ...creditInfo, sessions: e.target.value })
              }
            />
          </div>
          <div>
            <button type="submit" className="bg-gray-300 rounded">
              Credit Client
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DebitCreditClient;
