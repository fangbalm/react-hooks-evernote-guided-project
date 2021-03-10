import React, { useState, useEffect } from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Content from "./Content";
const notesAPI = "http://localhost:3000/api/v1/notes";

function NoteContainer() {

  const [notes, setNotes] = useState([])
  const [showSelectedNote, setShowSelectedNote] = useState(false)
  const [noteContent, setNoteContent] = useState({})
  const [searchTerm, setSearchTerm] = useState("")
  const [showEditForm, setShowEditForm] = useState(false)
  const [deleteClicked, setDeleteClicked] = useState(false)
  
  useEffect(() => {
    fetch(notesAPI)
    .then(res => res.json())
    .then(notesArray => setNotes(notesArray))
  }, []);


  function handleSelectedNote(selectedNote){

    // If the user has not selected a note, set the toggle to true. 
    if (showSelectedNote === false) {

      // Toggles if the user has clicked on a note or not
      setShowSelectedNote(!showSelectedNote)
      console.log("here is your selected note:", selectedNote)
      setNoteContent(selectedNote)

    } else {
      setNoteContent(selectedNote)
      console.log("here is your selected note:", selectedNote)
    }
  }

  function handleAddNote(e){  
    e.preventDefault()
    const newNoteObj = {
      title: "Untitled Note",
      body: "Body...",
    }
  
      fetch(notesAPI, {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(newNoteObj)
      })
      .then(res => res.json())
      .then(handleNewNote)
  }

  function handleNewNote(newNote){
    setNotes([newNote, ...notes])
    setNoteContent(newNote)
    setShowSelectedNote(true)
    setShowEditForm(true)
  }

  function handleSearchChange(e){
    const newSearchTerm = e.target.value
    setSearchTerm(newSearchTerm)
  }

  const lowerCaseSearch = searchTerm.toLowerCase();
  const filteredNotes = notes.filter(note => note.title.toLowerCase().includes(lowerCaseSearch))

  // function to set the state for the edit toggle - NOT the same as the actual boolean (showEditForm)
  function handleEditClick(){
    setShowEditForm(!showEditForm)
  }

  function handleCancelClick(){
    setShowEditForm(!showEditForm)
  }

  function handleEditNote(editedNote){
    console.log(editedNote)
    setNoteContent(editedNote)
    setShowSelectedNote(true)
    setShowEditForm(false)
  }

  function handleDeleteClick(){
    setDeleteClicked(!deleteClicked)
    console.log("Delete clicked!")
  }

  return (
    <>
      <Search onSearchChange={handleSearchChange} searchTerm={searchTerm}/>
      <div className="container">
        <Sidebar notes={filteredNotes} handleSelectedNote={handleSelectedNote} handleAddNote={handleAddNote}/>
        <Content note={noteContent} showSelectedNote={showSelectedNote} handleEditClick={handleEditClick} showEditForm={showEditForm} handleCancelClick={handleCancelClick} handleEditNote={handleEditNote} handleDeleteClick={handleDeleteClick} deleteClicked={deleteClicked}/>
      </div>
    </>
  );
}

export default NoteContainer;
