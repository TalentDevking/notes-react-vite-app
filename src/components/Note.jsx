import React from "react";

const Note = ({ notes, filter, editItem, removeItem }) => {
  const regex = new RegExp(filter, "gi");
  const filtered = notes.filter((note) => regex.test(note.text));

  return filtered.map((note, noteIndex) => (
    <li
      onClick={() => {
        editItem(note.id);
      }}
      key={note.id}
      className="min-h-[170px] bg-main flex gap-1 flex-col p-2 rounded-xl hover:cursor-pointer"
    >
      <div className="bg-main placeholder:text-white text-white p-1 resize-none outline-none h-full">
        {note.text}
      </div>
      <div className="flex justify-between align-center">
        <small>{note.date}</small>
        <div className="flex gap-4">
          <button onClick={(ev) => {
            removeItem(noteIndex)
            ev.stopPropagation()
          }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-trash3-fill hover:text-white"
              viewBox="0 0 16 16"
            >
              <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
            </svg>
          </button>
        </div>
      </div>
    </li>
  ));
};

export default Note;
