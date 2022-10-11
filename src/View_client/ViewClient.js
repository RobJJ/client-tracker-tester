import React from "react";
//
//
const ViewClient = ({ state }) => {
  // State is an obj that contains clients arr
  return (
    <div className="bg-green-300 flex justify-center items-center">
      <div className="bg-white w-5/6 h-5/6">
        {state.clients.map((client) => {
          return (
            <div key={client.id} className="p-2 border border-black">
              <h2>{client.name}</h2>
              <p>{client.notes}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ViewClient;
