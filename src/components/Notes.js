import React from "react";
import { useContext } from "react";
import NoteContext from "../Context/notes/NoteContext";
import NoteItem from "./NoteItem";
const Notes = () => {
  const context = useContext(NoteContext);
  const { notes, setnotes } = context;
  return (
    <div>
      <div className="row ">
        <h2>Your notes</h2>
        {notes.map((note) => {
          return <NoteItem note={note}></NoteItem>;
        })}
      </div>
    </div>
  );
};

export default Notes;
