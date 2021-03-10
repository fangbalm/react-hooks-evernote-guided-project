import React from "react";
import NoteList from "./NoteList";

function Sidebar({notes, handleSelectedNote, handleAddNote}) {
  return (
    <div className="master-detail-element sidebar ">
      <button onClick={handleAddNote}>New Note</button>
      <NoteList notes={notes} handleSelectedNote={handleSelectedNote}/>
      
    </div>
  );
}

export default Sidebar;
