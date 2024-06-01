import { useState } from 'react'
import './App.css'
import NoteForm from './Components/NoteForm';
import NoteList from './Components/NoteList';

function App() {
      const [noteTitle, setNoteTitle] = useState('');
      const [notes, setNotes] = useState([]);
      const [editMode, setEditMode] = useState(false);
      const [editableNote, setEditableNote] = useState(null);

  return (
      <div className="mainArea">
          <NoteForm
          noteTitle = {noteTitle} 
          setNoteTitle = {setNoteTitle}
          notes = {notes}
          setNotes = {setNotes}
          editMode = {editMode}
          setEditMode = {setEditMode}
          editableNote = {editableNote}
          setEditableNote = {setEditableNote}
          />
          <NoteList
          notes = {notes}
          setNotes = {setNotes}
          setNoteTitle = {setNoteTitle}
          setEditMode = {setEditMode}
          setEditableNote = {setEditableNote}
          />
      </div>
  )
}

export default App
