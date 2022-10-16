import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../Context/Context";
//
//
const ActiveClientReceipts = () => {
  const { focused } = useGlobalContext();
  //
  const [list, setList] = useState([]);
  useEffect(() => {
    const dataArr = [];
    for (const [key, value] of Object.entries(focused)) {
      if (key === "receipts") {
        for (const [type, arr] of Object.entries(value)) {
          arr.forEach((ele) => dataArr.push(ele));
        }
      }
      // value.forEach((ele) => dataArr.push(ele));
    }
    dataArr.sort((a, b) => a.date - b.date);
    console.log("dataArr: ", dataArr);
    setList(dataArr);
  }, [focused]);
  //
  return (
    <div className="bg-purple-300 flex justify-center items-center">
      <div className="bg-white w-5/6 h-5/6">
        <div className="text-center underline mb-2">{focused.name}</div>
        <div className="flex flex-col gap-1">
          {/*{focused.receipts.debits.map((debit) => {})}*/}
          <div className="flex w-full bg-green-200 pl-4 gap-2">
            <h3 className="w-1/3">22-10-2022</h3>
            <h3 className="w-1/3">2000 usd</h3>
            <h3 className="w-1/3">+25</h3>
          </div>
          <div className="flex w-full bg-green-200 pl-4 gap-2">
            <h3 className="w-1/3">25-10-2022</h3>
            <h3 className="w-1/3">500 usd</h3>
            <h3 className="w-1/3">+10</h3>
          </div>
          <div className="flex w-full bg-yellow-200 pl-4 gap-2">
            <h3 className="w-1/3">23-10-2022</h3>
            <h3 className="w-1/3">20 usd</h3>
            <h3 className="w-1/3">-1</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveClientReceipts;
