import React from "react";
import NoteItem from "./NoteItem";

function NoteList({notes, handleSelectedNote }) {
  const notesComponents = notes.map((note) => {
    return <NoteItem key={note.id} note={note} handleSelectedNote={handleSelectedNote}/>
  })
  return (
    <ul>
      {notesComponents}
    </ul>
  );
}

export default NoteList;
