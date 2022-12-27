import React from "react";
import { useContext } from "react";
import NoteContext from "../Context/notes/NoteContext";
const NoteItem = ({ note, updateNote }) => {
  const context = useContext(NoteContext);
  const { deleteNote } = context;

  return (
    <div className="col-md-3  my-3">
      <div className="card ">
        <div className="card-body">
          <div className="d-flex align-items-center justify-content-between my-1">
            <h5 className="card-title">{note.title}</h5>
            <i
              className="fa fa-light fa-pen-to-square mx-2"
              onClick={() => {
                updateNote(note);
              }}
            ></i>
            <i
              className="fa-solid fa-trash-can mx-2"
              onClick={() => {
                deleteNote(note._id);
              }}
            ></i>
          </div>
          <h6 className="card-subtitle mb-2 text-muted">{note.tag}</h6>
          <p className="card-text">{note.description}</p>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
