import React from "react";

function NoteItem({ note, onSelectNote }) {
  // Use regex to access the note body and retrieve a string that matches anything until it hits a period, exclamation, or question mark: https://stackoverflow.com/questions/3788220/extract-first-sentence-from-string-of-text 
  const notePreview = note.body.split('.')[0] + "..."
  // console.log(notePreview)
  return (
    <li onClick={() => onSelectNote(note)}>
      <h2>{note.title}</h2>
      <p>{notePreview}</p>
    </li>
  );
}

export default NoteItem;
