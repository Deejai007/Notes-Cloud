import React from "react";
import { useContext } from "react";
import NoteContext from "../../Context/notes/NoteContext";
import "./NoteItem.css";
const NoteItem = ({ note, updateNote }) => {
  const context = useContext(NoteContext);
  const { deleteNote } = context;

  return (
    // <div className="col-md-3  my-3">
    <div className="card col-md-3">
      <div className="card-body">
        <div className="d-flex align-items-center justify-content-between my-1">
          <h5 className="card-title">{note.title}</h5>
          {/* <h6 className="card-subtitle mb-2 text-muted">{note.tag}</h6> */}
          <div className="note-tag mb-2 ">{note.tag}</div>
        </div>
        <p className="card-text">{note.description}</p>

        <div className="d-flex align-items-center justify-content-end my-1">
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
      </div>
    </div>
    // </div>
  );
};

export default NoteItem;
