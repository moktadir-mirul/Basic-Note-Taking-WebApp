import { useState, useEffect } from 'react'
import './App.css'
import NoteForm from './Components/NoteForm';
import NoteList from './Components/NoteList';


function App() {

   
    const [note, setNote] = useState({title: ''});
    const [editMode, setEditMode] = useState(false);
    const [editableNote, setEditableNote] = useState(null);

  return (
      <div className="mainArea">
          <NoteForm
          note = {note} 
          setNote = {setNote}
          editMode = {editMode}
          setEditMode = {setEditMode}
          editableNote = {editableNote}
          setEditableNote = {setEditableNote}
          />
          <NoteList
          setNote = {setNote}
          setEditMode = {setEditMode}
          setEditableNote = {setEditableNote}
          />
      </div>
  )
}

export default App
