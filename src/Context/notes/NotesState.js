import React from "react";
import { useState } from "react";
import NoteContext from "./NoteContext";
const NoteState = (props) => {
  const notesinit = [
    {
      _id: "63a2f853afedd710f5f3711e",
      user: "63a21ebabf3361d86922ebe9",
      title: "Second Note",
      description: "susususususu",
      tag: "personal",
      date: "2022-12-21T12:13:07.404Z",
      __v: 0,
    },
    {
      _id: "63a2f8ffafedd710f5f37123",
      user: "63a21ebabf3361d86922ebe9",
      title: "Second Note",
      description: "Sleep early",
      tag: "personal",
      date: "2022-12-21T12:15:59.567Z",
      __v: 0,
    },
    {
      _id: "63a2fa37ad275ac02c7d724f",
      user: "63a21ebabf3361d86922ebe9",
      title: "Second Note",
      description: "Sleep early",
      tag: "personal",
      date: "2022-12-21T12:21:11.035Z",
      __v: 0,
    },
    {
      _id: "63a2fa37ad275ac02c7d724f",
      user: "63a21ebabf3361d86922ebe9",
      title: "Second Note",
      description: "Sleep early",
      tag: "personal",
      date: "2022-12-21T12:21:11.035Z",
      __v: 0,
    },
    {
      _id: "63a2fa37ad275ac02c7d724f",
      user: "63a21ebabf3361d86922ebe9",
      title: "Second Note",
      description: "Sleep early",
      tag: "personal",
      date: "2022-12-21T12:21:11.035Z",
      __v: 0,
    },
    {
      _id: "63a2fa37ad275ac02c7d724f",
      user: "63a21ebabf3361d86922ebe9",
      title: "Second Note",
      description: "Sleep early",
      tag: "personal",
      date: "2022-12-21T12:21:11.035Z",
      __v: 0,
    },
    {
      _id: "63a2fa37ad275ac02c7d724f",
      user: "63a21ebabf3361d86922ebe9",
      title: "Second Note",
      description: "Sleep early",
      tag: "personal",
      date: "2022-12-21T12:21:11.035Z",
      __v: 0,
    },
    {
      _id: "63a2fa37ad275ac02c7d724f",
      user: "63a21ebabf3361d86922ebe9",
      title: "Second Note",
      description: "Sleep early",
      tag: "personal",
      date: "2022-12-21T12:21:11.035Z",
      __v: 0,
    },
    {
      _id: "63a2fa37ad275ac02c7d724f",
      user: "63a21ebabf3361d86922ebe9",
      title: "Second Note",
      description: "Sleep early",
      tag: "personal",
      date: "2022-12-21T12:21:11.035Z",
      __v: 0,
    },
    {
      _id: "63a2fa3ead275ac02c7d7251",
      user: "63a21ebabf3361d86922ebe9",
      title: "Second Note",
      description: "Slarly",
      tag: "personal",
      date: "2022-12-21T12:21:18.001Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(notesinit);
  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
