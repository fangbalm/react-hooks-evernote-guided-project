import React from "react";
import NoteEditor from "./NoteEditor";
import NoteViewer from "./NoteViewer";
import Instructions from "./Instructions";
// import NoteDelete from "./NoteDelete";

/*
  Advice: If you cannot figure out how to get this component to work,
          move the div and getContent up into NoteContainer and
          try to get it to work in the parent first.
          Then complete the rest of your app before attempting to
          refactor to get this Content component to work.
*/
function Content({note, showSelectedNote, handleEditClick, showEditForm, handleCancelClick, handleEditNote, handleDeleteClick, deleteClicked}) {
  const getContent = () => {
    if (showEditForm) { 
      return <NoteEditor note={note} showEditForm={showEditForm} handleCancelClick={handleCancelClick} handleEditNote={handleEditNote}/>;
    } else if (showSelectedNote) {
      return <NoteViewer note={note} handleEditClick={handleEditClick} handleDeleteClick={handleDeleteClick} showSelectedNote={showSelectedNote}/>;
    } 
    // else if(deleteClicked){
    //   <NoteDelete note={note} deleteClicked={deleteClicked}/>
    // }
    else {
      return <Instructions />;
    }
  };

  return <div className="master-detail-element detail">{getContent()}</div>;
}

export default Content;
