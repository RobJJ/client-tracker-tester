import React from "react";
import { useGlobalContext } from "../Context/Context";
//
//
const ActiveClient = () => {
  // Pull in focusedClient from context
  const { focused } = useGlobalContext();
  //
  // Conditional to render for no focused Client
  if (Object.keys(focused).length === 0) {
    return (
      <div className="bg-pink-700 flex justify-center items-center">
        <div className="bg-white w-5/6 h-5/6 text-center pt-2 underline">
          SELECT A CLIENT TO VIEW
        </div>
      </div>
    );
  }

  return (
    <div className="bg-pink-700 flex justify-center items-center">
      <div className="bg-white w-5/6 h-5/6 p-1">
        <div className="bg-pink-500 flex flex-col gap-1 h-full w-full justify-around">
          <h2 className="bg-pink-300 ml-2">
            Name: <span className="ml-5">{focused.name}</span>
          </h2>
          <h2 className="bg-pink-300 ml-2">
            Email: <span className="ml-5">{focused.email}</span>
          </h2>
          <h2 className="bg-pink-300 ml-2">
            Contact: <span className="ml-5">{focused.contact}</span>
          </h2>
          <h2 className="bg-pink-300 ml-2">
            Status:{" "}
            <span className="ml-5">
              {focused.active ? "ACTIVE" : "INACTIVE"}
            </span>
          </h2>
          <h2 className="bg-pink-300 ml-2">
            Notes: <span className="ml-5">notes **</span>
          </h2>
          <h2 className="bg-pink-300 ml-2">
            Balance: <span className="ml-5">Balance **</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ActiveClient;
