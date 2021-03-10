import React from "react";

function NoteViewer({note, handleEditClick, handleDeleteClick}) {
  return (
    <>
      <h2>{note.title}</h2>
      <p>{note.body}</p>
      <button onClick={handleEditClick}>Edit</button>
      <button onClick={handleDeleteClick}>Delete</button>
    </>
  );
}

export default NoteViewer;
