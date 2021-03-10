# README: React Frontend

## Setup

From within this directory:

```sh
npm install
npm start
```

This React app will be running on `http://localhost:4000`.


![component hierarchy](https://i.gyazo.com/2fba867b247bfd49f72a0b3a3e623a78.png)

STEPS TO FOLLOW: 
====================

1. Have the notes data display on the left side bar when page loads.
==========
    How to do that? - 

    (**NOTE:** Figure out where to add state. Question: Whether to import useState & useEffect in App or NoteContainer:

    - I've realized that header is not interacting with notes in any way, and doesn't need Note data (maybe if I want to add information about the notes to the header as a stretch goal later)
    - Due to the fact APP is essentially just connecting header and notescontainer together, I think I will put the fetch & state in NotesContainer so that I don't have to pass down the notes as a prop from App.)


 * import useEffect from React in NotesContainer component to fetch the data from "http://localhost:3000/api/v1/notes" on page load
 * import useState from React in NotesContainer component to be able to pass the array of notes to NotesContainer
 * create a constant for state [notes, setNotes] to grab the notes from the fetch

 NOTECONTAINER -> SIDEBAR -> NOTELIST 

useEffect(() => {
    fetch(notesAPI)
    .then(res => res.json())
    .then(notesArray => setNotes(notesArray))
}, []);

the final setNotes pushes the API data into the notes variable. 

* {FILTERING/SEARCH LOGIC - insert later (NotesContainer)}

* send down that notes array from NotesContainer as a prop to the sidebar (<Sidebar notes={notes}/>)
* send down notes from Sidebar to NotesList <NoteList notes={notes}/>
* From NoteList, map through each note to return a NoteItem with the singular note as a prop. 

const notesComponents = notes.map((note) => {
    return <NoteItem key={note.id} note={note}/>

* In NoteItem, pass in the singular note data. {note.title} and {note.body} - truncate it 

2. When a note is clicked, have the note display in the content section
==========

* Create state for two things: 
    1. to determine if a note has been clicked (boolean)
         const [showSelectedNote, setShowSelectedNote] = useState(false)

    2. to set the selected note so that it can be displayed 
        const [noteContent, setNoteContent] = useState({})



https://stackoverflow.com/questions/47715651/react-truncate-text-by-line How to truncate