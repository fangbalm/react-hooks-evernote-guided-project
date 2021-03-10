import React from "react";

function NoteItem({ note, handleSelectedNote }) {
  // Use regex for note preview: https://stackoverflow.com/questions/3788220/extract-first-sentence-from-string-of-text 
  const notePreview = note.body.split('.')[0] + "..."
  return (
    <li onClick={() => handleSelectedNote(note)}>
      <h2>{note.title}</h2>
      <p>{notePreview}</p>
    </li>
  );
}

export default NoteItem;
