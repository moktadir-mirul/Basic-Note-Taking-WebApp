import { useState, useEffect } from 'react'
import './App.css'
import NoteForm from './Components/NoteForm';
import NoteList from './Components/NoteList';

function App() {
      const [noteTitle, setNoteTitle] = useState('');
      const [notes, setNotes] = useState([]);
      const [editMode, setEditMode] = useState(false);
      const [editableNote, setEditableNote] = useState(null);

    const AllNotes = () => {
        fetch('http://localhost:3000/notes')
        .then(res => res.json())
        .then((data) => {
            setNotes(data)
        })
    }

    useEffect(() => {
        AllNotes()
    }, [])

  return (
      <div className="mainArea">
          <NoteForm
          noteTitle = {noteTitle} 
          setNoteTitle = {setNoteTitle}
          editMode = {editMode}
          setEditMode = {setEditMode}
          editableNote = {editableNote}
          setEditableNote = {setEditableNote}
          AllNotes = {AllNotes}
          />
          <NoteList
          notes = {notes}
          setNoteTitle = {setNoteTitle}
          setEditMode = {setEditMode}
          setEditableNote = {setEditableNote}
          AllNotes = {AllNotes}
          />
      </div>
  )
}

export default App
