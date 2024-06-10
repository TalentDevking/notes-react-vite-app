import React, { useState } from "react";

const AddCard = (props) => {
  const generateRandomKey = (l) => {
    let result = "";
    let characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < l; i++) {
      let randomCharNum = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomCharNum);
    }
    return result;
  };

  const [textValue, setTextValue] = useState("");

  const handleAddNote = () => {
    const note = {
      id: generateRandomKey(20),
      text: textValue,
      date: new Date().toLocaleDateString("pt-br"),
      isEditing: false,
    };

    if (textValue.length > 0) {
      props.addNote(note);
      setTextValue("");
    }
  };

  return (
    <li className="min-h-[170px] bg-light flex gap-1 flex-col p-2 rounded-xl border border-gray-300">
      <textarea
        value={textValue}
        onChange={(e) => setTextValue(e.target.value)}
        className="bg-light placeholder:text-black text-black p-1 resize-none outline-none h-full"
        placeholder="Type to add a new note..."
      ></textarea>
      <div className="flex justify-end">
        <button
          onClick={handleAddNote}
          className="text-white bg-light rounded-xl py-0.5 px-1.5 border-2 border-gray-300 hover:bg-main"
        >
          Save
        </button>
      </div>
    </li>
  );
};

export default AddCard;
