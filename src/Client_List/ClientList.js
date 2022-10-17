import React from "react";
import { useGlobalContext } from "../Context/Context";

//
//
const ClientList = () => {
  // Bring in variables from context
  const { clients, dispatch } = useGlobalContext();
  //
  return (
    <div className="bg-green-500 flex justify-center items-center">
      <div className="bg-white w-5/6 h-5/6 flex flex-col gap-1 overflow-auto">
        {clients.map((client) => {
          return (
            <div
              key={client.id}
              className="flex justify-between px-2 bg-green-200 rounded cursor-pointer"
              onClick={() => {
                // setFocusedClient(client);
                // setIsFocused(true);
                dispatch({ type: "CAMS_MAGIC", payload: client });
                //dispatch payload: client
              }}
            >
              <h2>{client.name}</h2>
              <span>{client.active ? "ACTIVE" : "INACTIVE"}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ClientList;

// Template used for flex items - clients
// <div className="flex justify-between px-2 bg-green-200 rounded">
//   <h2>TOMMO THE POOP</h2>
//   <span>ACTIVE</span>
// </div>;
