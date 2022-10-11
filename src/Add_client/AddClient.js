import React from "react";
//
//
const AddClient = ({ client, setClient, handleSubmit, dispatch }) => {
  //
  const handleClick = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_CLIENT",
      payload: {
        name: client.name,
        notes: client.notes,
        id: Math.floor(Math.random() * 100),
      },
    });
    setClient({ name: "", notes: "", id: "" });
  };
  //
  return (
    <div className="bg-pink-300 flex justify-center items-center">
      <div className="bg-white w-5/6 h-5/6 flex flex-col container">
        <div className="text-center underline p-2 bg-slate-100">
          <h2>Add Client</h2>
        </div>
        <div className="bg-gray-300 h-full p-2">
          <form
            className="flex flex-col underline gap-4"
            onSubmit={handleSubmit}
          >
            <div>
              <label className="pr-2">Name:</label>
              <input
                className="p-2"
                type="text"
                value={client.name}
                onChange={(e) => setClient({ ...client, name: e.target.value })}
              />
            </div>
            <div className="flex">
              <label className="pr-2">Notes:</label>
              <textarea
                className="p-2"
                type="text"
                value={client.notes}
                onChange={(e) =>
                  setClient({ ...client, notes: e.target.value })
                }
              />
            </div>

            <button className="" type="submit" onClick={handleClick}>
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddClient;
