import React from "react";
import { useContext, useEffect } from "react";
import NoteContext from "../Context/notes/NoteContext";
import AddNote from "./AddNote";
import NoteItem from "./NoteItem";
const Notes = () => {
  const context = useContext(NoteContext);
  const { notes, getNotes, setnotes, addNote } = context;
  useEffect(() => {
    getNotes();
  }, []);
  return (
    <>
      <AddNote />
      <div className="row ">
        <h2>Your notes</h2>
        {notes.map((note) => {
          return <NoteItem key={note._id} note={note}></NoteItem>;
        })}
      </div>
    </>
  );
};
export default Notes;
