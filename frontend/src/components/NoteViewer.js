import React from "react";

function NoteViewer({note, onEditClick, onDeleteClick}) {
  // Why is there a delay between the click? 
  return (
    <>
      <h2>{note.title}</h2>
      <p>{note.body}</p>
      <button onClick={onEditClick}>Edit</button>
      <button onClick={onDeleteClick}>Delete</button>
    </>
  );
}

export default NoteViewer;
