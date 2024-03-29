import React from "react";
import { useState } from "react";
import NoteContext from "./NoteContext";
const NoteState = (props) => {
  const host = "https://notescloud.onrender.com";

  const [notes, setNotes] = useState([]);

  // Get all Notes
  const getNotes = async () => {
    // API call

    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",

      headers: {
        "auth-token": `${localStorage.token}`,
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    setNotes(json);
  };
  // Add a note
  const addNote = async (title, description, tag) => {
    // API call
    console.log("Add note api called");
    await fetch(`${host}/api/notes/addnote`, {
      method: "POST",

      headers: {
        "auth-token": `${localStorage.token}`,
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ title, description, tag }),
    });
    console.log("Adding a new note");
  };
  // Delete a note
  const deleteNote = async (id) => {
    // API Call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",

      headers: {
        "auth-token": `${localStorage.token}`,
        "Content-Type": "application/json",
      },
    });
    console.log("Deleting the note");

    let newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  // Edit a note
  const editNote = async (id, title, description, tag) => {
    // API call

    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",

      headers: {
        "auth-token": `${localStorage.token}`,
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ title, description, tag }),
    });
    const json = response.json();

    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };
  return (
    <NoteContext.Provider
      value={{ notes, setNotes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
