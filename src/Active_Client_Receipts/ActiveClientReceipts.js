import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../Context/Context";
//
//
const ActiveClientReceipts = () => {
  const { focused } = useGlobalContext();
  //
  useEffect(() => {
    console.log("USE EFFECT TRIGGERED - DOES LIST UPDATE?");
  }, [focused]);
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
  // const [list, setList] = useState([]);
  // useEffect(() => {
  //   const dataArr = [];
  //   for (const [key, value] of Object.entries(focused)) {
  //     if (key === "receipts") {
  //       for (const [type, arr] of Object.entries(value)) {
  //         arr.forEach((ele) => dataArr.push(ele));
  //       }
  //     }
  //     // value.forEach((ele) => dataArr.push(ele));
  //   }
  //   dataArr.sort((a, b) => a.date - b.date);
  //   console.log("dataArr: ", dataArr);
  //   setList(dataArr);
  // }, [focused]);
  //
  return (
    <div className="bg-purple-300 flex justify-center items-center">
      <div className="bg-white w-5/6 h-5/6">
        <div className="text-center underline mb-2">{focused.name}</div>
        <div className="flex flex-col gap-1">
          {focused.receipts.debits.map((debit) => {
            return (
              <div
                className="flex w-full bg-green-200 pl-4 gap-2"
                key={debit.id}
              >
                <h3 className="w-1/3">{debit.date}</h3>
                <h3 className="w-1/3">{debit.amount}</h3>
                <h3 className="w-1/3">+{debit.sessions}</h3>
              </div>
            );
          })}
          {focused.receipts.credits.map((credit) => {
            return (
              <div
                className="grid grid-cols-3 pl-4 gap-2 bg-yellow-200"
                key={credit.id}
              >
                <h3 className="col-span-1">{credit.date}</h3>
                <h3 className="col-start-3 col-span-1">-{credit.sessions}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ActiveClientReceipts;

// <div className="flex w-full bg-green-200 pl-4 gap-2">
//             <h3 className="w-1/3">22-10-2022</h3>
//             <h3 className="w-1/3">2000 usd</h3>
//             <h3 className="w-1/3">+25</h3>
//           </div>
//           <div className="grid grid-cols-3 pl-4 gap-2 bg-green-200">
//             <h3>25-10-2022</h3>
//             <h3>500 usd</h3>
//             <h3>+10</h3>
//           </div>
//           <div className="grid grid-cols-3 pl-4 gap-2 bg-yellow-200">
//             <h3 className="col-span-1">23-10-2022</h3>
//             <h3 className="col-start-3 col-span-1">-1</h3>
//           </div>
