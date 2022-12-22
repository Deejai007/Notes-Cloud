import React from "react";

const NoteItem = (props) => {
  return (
    <div className="col-md-3 ">
      {/* <div className="note">{props.note.title}</div> */}
      {/* <div className="note">{props.note.description}</div> */}
      <div className="card ">
        <div className="card-body">
          <h5 className="card-title">{props.note.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{props.note._id}</h6>
          <p className="card-text">{props.note.description}</p>
          {/* <a href="#" className="card-link">Card link</a> */}
          {/* <a href="#" className="card-link">Another link</a> */}
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
