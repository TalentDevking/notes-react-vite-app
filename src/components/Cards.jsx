import React, { useState, useEffect } from "react";
import AddCard from "./AddCard";
import Note from "./Note";
import Edit from "./Edit";

const Cards = ({filter}) => {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes-data")) || []
  );
  const [isEditing, setIsEditing] = useState(false);
  const [newTextValue, setNewTextValue] = useState("");
  const [noteId, setNoteId] = useState("");

  const addNote = (data) => {
    setNotes((prevNotes) => [data, ...prevNotes]);
  };

  const removeItem = (noteIndex) => {
    setNotes((prevNotes) => prevNotes.filter((_, i) => i !== noteIndex));
  };

  const editItem = (key) => {
    setIsEditing(true);
    setNoteId(key);
    setNewTextValue(notes.find((note) => note.id === key).text);
  };

  const setText = (text) => {
    setNotes((prevNotes) => {
      return prevNotes.map((note) => {
        if (note.id === noteId) note.text = text;
        return note;
      });
    });
  };

  const saveLocal = () => {
    localStorage.setItem("notes-data", JSON.stringify(notes));
  };

  useEffect(() => {
    window.addEventListener("beforeunload", saveLocal);
    return () => {
      window.removeEventListener("beforeunload", saveLocal);
    };
  }, [notes]);

  return (
    <ul className="container mx-auto max-w-container px-4 py-2 grid grid-cols-main gap-2">
      {isEditing ? (
        <Edit
          setText={setText}
          newTextValue={newTextValue}
          handleIsEditing={setIsEditing}
        />
      ) : (
        <>
          <Note
            editItem={editItem}
            notes={notes}
            removeItem={removeItem}
            filter={filter}
          />
          <AddCard addNote={addNote} />
        </>
      )}
    </ul>
  );
}

export default Cards