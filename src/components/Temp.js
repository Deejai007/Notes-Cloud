import React from "react";
import { useContext, useState } from "react";
import NoteContext from "../Context/notes/NoteContext";
const AddNote = () => {
  const context = useContext(NoteContext);
  const { addNote } = context;
  const [note, setNote] = useState({ title: "", description: "", tag: "" });
  const handleClick = (e) => {
    // e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" });
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <h3>Add Yout note</h3>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            // minLength={3}
            // required
            value={note.title}
            name="title"
            className="form-control"
            id="inputTitle"
            aria-describedby="titleHelp"
            onChange={onChange}
            placeholder="minLength:3"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">
            Tag
          </label>
          <input
            type="text"
            value={note.tag}
            name="tag"
            className="form-control"
            id="tag"
            aria-describedby="tagHelp"
            onChange={onChange}
            // minLength={3}
            placeholder="minLength:3"

            // required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            description
          </label>
          <input
            placeholder="minLength:3"
            // minLength={3}
            // required
            value={note.description}
            name="description"
            type="text"
            className="form-control"
            id="description"
            aria-describedby="descriptionHelp"
            onChange={onChange}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleClick}
          disabled={note.title.length < 3 || note.description.length < 3}
        >
          Add Note
        </button>
      </form>
    </div>
  );
};

export default AddNote;
