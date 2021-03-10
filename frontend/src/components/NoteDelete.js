// import React, {useState} from "react";


// function NoteDelete({note, deleteClicked}) {
//     const [deletedNoteId, setDeletedNoteId] = useState(note.id)
//     const [deletedNoteTitle, setDeletedNoteTitle] = useState(note.title)
//     const [deletedNoteBody, setDeletedNoteBody] = useState(note.body)
//     console.log(note)
 
//     const deletedNote = {
//         id: deletedNoteId,
//         title: deletedNoteTitle, 
//         body: deletedNoteBody
//     }


// fetch(`http://localhost:3000/api/v1/notes/${note.id}`, {
//   method: 'DELETE',
//   headers: {
//       'Content': 'application/json',
//   },
//   body: JSON.stringify(deletedNote)
// })
// .then(res => res.json())
// .then(console.log)
  
// }

// export default NoteDelete;