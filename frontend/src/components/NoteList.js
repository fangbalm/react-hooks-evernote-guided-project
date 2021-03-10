import React from "react";
import NoteItem from "./NoteItem";

function NoteList({notes, onSelectNote }) {
  const notesComponents = notes.map((note) => {
    return <NoteItem key={note.id} note={note} onSelectNote={onSelectNote}/>
  })
  return (
    <ul>
      {notesComponents}
    </ul>
  );
}

export default NoteList;
