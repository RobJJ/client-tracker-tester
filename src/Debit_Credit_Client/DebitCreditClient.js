import React, { useState } from "react";
//
//
const DebitCreditClient = () => {
  return (
    <div className="bg-orange-300 flex justify-center items-center">
      <div className="bg-white w-5/6 h-5/6 flex flex-col text-center">
        <section className="underline">CLIENT NAME HERE</section>
        {/* DEBIT SECTION */}
        <section className="flex flex-col">
          <div>** Handle your received payments **</div>
          <div className="ml-2 flex gap-5 ">
            <h2>Payment Date: </h2>
            <input type="date" data-date-format="DD-MM-YYYY" />
          </div>
          <div className="ml-2 flex gap-5 ">
            <h2>Payment Amount: </h2>
            <input type="text" className="border" />
          </div>
          <div className="ml-2 flex gap-5 ">
            <h2>Classes Added: </h2>
            <input type="number" className="border" />
          </div>
          <div>
            <button className="bg-gray-300 rounded ">Debit Client</button>
          </div>
        </section>
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
