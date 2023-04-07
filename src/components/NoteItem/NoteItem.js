import React, { useState } from "react";
import { useContext } from "react";
import NoteContext from "../../Context/notes/NoteContext";
import CircularProgress from "@mui/material/CircularProgress";
import "./NoteItem.css";
const NoteItem = ({ note, updateNote }) => {
  const context = useContext(NoteContext);
  const { deleteNote } = context;
  const [dltload, setDltload] = useState(false);
  const deleteClick = async () => {
    setDltload(true);
    await deleteNote(note._id);
    setDltload(false);
  };
  return (
    <div className="card col-md-3 my-2 mx-1 center">
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

          {dltload ? (
            <CircularProgress size={20} color="error" />
          ) : (
            <i className="fa-solid fa-trash-can mx-2" onClick={deleteClick}></i>
          )}
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
