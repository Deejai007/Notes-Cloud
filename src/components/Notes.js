import React from "react";
import { useState, useContext, useEffect, useRef } from "react";
import NoteContext from "../Context/notes/NoteContext";
import AddNote from "./AddNote";
import NoteItem from "./NoteItem/NoteItem";
const Notes = (props) => {
  const context = useContext(NoteContext);
  const { notes, getNotes, setnotes, editNote, addNote } = context;
  useEffect(() => {
    getNotes();
  }, [notes]);
  const ref = useRef(null);
  const refClose = useRef(null);
  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({
      etitle: currentNote.title,
      etag: currentNote.tag,
      edescription: currentNote.description,
      id: currentNote._id,
    });
  };
  const [note, setNote] = useState({
    etitle: "",
    edescription: "",
    etag: "",
    id: "",
  });
  const handleClick = (e) => {
    editNote(note.id, note.etitle, note.edescription, note.etag);
    refClose.current.click();
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <>
      <button
        ref={ref}
        type="button"
        className="btn d-none btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Edit note
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Update Note
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="etitle" className="form-label">
                    Title
                  </label>
                  <input
                    minLength={3}
                    required
                    type="text"
                    name="etitle"
                    value={note.etitle}
                    placeholder="minLength:3"
                    className="form-control"
                    id="einputTitle"
                    aria-describedby="etitleHelp"
                    onChange={onChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="etag" className="form-label">
                    Tag
                  </label>
                  <input
                    type="text"
                    value={note.etag}
                    name="etag"
                    minLength={3}
                    required
                    className="form-control"
                    id="etag"
                    aria-describedby="etagHelp"
                    onChange={onChange}
                    placeholder="minLength:3"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="edescription" className="form-label">
                    description
                  </label>
                  <input
                    value={note.edescription}
                    minLength={3}
                    required
                    name="edescription"
                    type="text"
                    className="form-control"
                    id="edescription"
                    aria-describedby="edescriptionHelp"
                    onChange={onChange}
                    placeholder="minLength:3"
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                ref={refClose}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleClick}
                disabled={
                  note.etitle.length < 3 || note.edescription.length < 3
                }
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
      <h2>Your notes</h2>
      <div className="row d-flex justify-content-md-around">
        {notes.length === 0 ? (
          <img
            src="https://i.pinimg.com/736x/ae/8a/c2/ae8ac2fa217d23aadcc913989fcc34a2---page-empty-page.jpg"
            alt=""
          />
        ) : (
          notes.reverse().map((note) => {
            return (
              <NoteItem
                key={note._id}
                note={note}
                updateNote={updateNote}
              ></NoteItem>
            );
          })
        )}
      </div>
    </>
  );
};
export default Notes;
