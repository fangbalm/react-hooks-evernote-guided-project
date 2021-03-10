import React, {useState} from "react";

function NoteEditor({note, showEditForm, onCancelClick, handleEditNote}) {
  const [newNoteTitle, setNewNoteTitle] = useState(note.title)
  const [newNoteBody, setNewNoteBody] = useState(note.body)

  function handleSubmit(e){
    e.preventDefault()
    
    fetch(`http://localhost:3000/api/v1/notes/${note.id}`, {
      method: "PATCH", 
      headers: {
        "Content-Type": "application/json", 
      }, 
      body: JSON.stringify({title: newNoteTitle, body: newNoteBody})
    })
    .then(res => res.json())
    .then(handleEditNote)
  }

  function handleEditTitle(e){
    const newTitle = e.target.value
    setNewNoteTitle(newTitle)
  }

  function handleEditBody(e){
    const newBody = e.target.value
    setNewNoteBody(newBody)
  }


  return (
    <form className="note-editor" onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="Untitled Note" onChange={handleEditTitle} value={newNoteTitle} autoFocus/>
      <textarea name="body" placeholder="Tell me your deepest thoughts..." onChange={handleEditBody} value={newNoteBody}/>
      <div className="button-row">
        <input className="button" type="submit" value="Save" />
        <button type="button" onClick={onCancelClick}>Cancel</button>
      </div>
    </form>
  );
}

export default NoteEditor;
