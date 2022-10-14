import React from "react";
import { useGlobalContext } from "../Context/Context";
//
//
const AddClient = () => {
  // Actions grabbed from context
  const { submit, setNewClientInfo, newClientInfo } = useGlobalContext();
  //
  return (
    <div className=" col-span-2 bg-red-300 flex justify-center items-center">
      <div className="bg-white w-5/6 h-5/6 p-2">
        <form
          className="bg-gray-300 h-full w-full flex flex-col justify-around"
          onSubmit={submit}
        >
          <div className="bg-gray-400 flex w-full p-2 justify-center">
            <h2 className="w-24">Name:</h2>
            <input
              className="w-56 p-1"
              type="text"
              required
              value={newClientInfo.name}
              onChange={(e) =>
                setNewClientInfo({ ...newClientInfo, name: e.target.value })
              }
            />
          </div>
          <div className="bg-gray-400 flex w-full p-2 justify-center">
            <h2 className="w-24">Email:</h2>
            <input
              className="w-56 p-1"
              type="email"
              required
              value={newClientInfo.email}
              onChange={(e) =>
                setNewClientInfo({ ...newClientInfo, email: e.target.value })
              }
            />
          </div>
          <div className="bg-gray-400 flex w-full p-2 justify-center">
            <h2 className="w-24">Contact:</h2>
            <input
              className="w-56 p-1"
              type="text"
              required
              value={newClientInfo.contact}
              onChange={(e) =>
                setNewClientInfo({ ...newClientInfo, contact: e.target.value })
              }
            />
          </div>
          <div className="bg-gray-400 flex w-full p-2 justify-center">
            <h2 className="w-24">Notes:</h2>
            <input
              className="w-56 p-1"
              type="text"
              required
              value={newClientInfo.notes}
              onChange={(e) =>
                setNewClientInfo({
                  ...newClientInfo,
                  notes: [e.target.value],
                })
              }
            />
          </div>
          <div className="bg-gray-400 flex w-full p-2 justify-center">
            <button type="submit" className="bg-white p-1">
              Submit the form
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddClient;
