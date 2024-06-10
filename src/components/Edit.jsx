import React, { useState } from "react";

const Edit = (props) => {
  const [newTextValue, setNewTextValue] = useState(props.newTextValue);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleIsEditing(false);
    props.setText(newTextValue);
  };

  return (
    <li className="min-h-[170px] bg-main flex gap-1 flex-col p-2 rounded-xl">
      <textarea
        value={newTextValue}
        onChange={(e) => setNewTextValue(e.target.value)}
        className="bg-main placeholder:text-white text-white p-1 resize-none outline-none h-full"
        placeholder="Type something..."
      ></textarea>
      <form className="flex justify-center" onSubmit={handleSubmit}>
        <button
          type="submit"
          className="text-black hover:bg-main hover:text-white py-1 px-2 bg-white border-gray-300 border-2 rounded-xl"
        >
          Save Item
        </button>
      </form>
    </li>
  );
};

export default Edit