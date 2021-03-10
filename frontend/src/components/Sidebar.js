import React from "react";
import NoteList from "./NoteList";

function Sidebar({notes, onSelectNote, onAddNote}) {
  return (
    <div className="master-detail-element sidebar ">
      <button onClick={onAddNote}>New Note</button>
      <NoteList notes={notes} onSelectNote={onSelectNote}/>
      
    </div>
  );
}

export default Sidebar;
