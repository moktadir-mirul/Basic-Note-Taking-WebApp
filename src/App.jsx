import { useState } from 'react'

import './App.css'

function App() {
      const [noteTitle, setNoteTitle] = useState('');
      const [notes, setNotes] = useState([]);
      const [editMode, setEditMode] = useState(false);
      const [editableNote, setEditableNote] = useState(null);

      const inputHandler = (input) => {
        setNoteTitle(input.target.value)
      }

      const createHandler = () => {
                    const newNote = {
                                      id: Date.now()+'',
                                      title: noteTitle
                                    }
          setNotes([...notes, newNote]);
          setNoteTitle('');
      }

      const editHandler = (note) => {
        setEditMode(true);
        setNoteTitle(note.title);
        setEditableNote(note)
      }

      const updateHandler = () => {
        const updatedNoteArr = notes.map((note) => {
          if(note.id === editableNote.id) {
            return {
                    ...note,
                    title: noteTitle
                  }
          }
            return note
        })
        setNotes(updatedNoteArr);
        setEditMode(false);
        setNoteTitle('');
        setEditableNote(null);
      }

      const submitHandler = (event) => {
        event.preventDefault();
        if (noteTitle.trim() === '') return alert('Please enter a note name');
        editMode === true ? updateHandler():createHandler();
      }

      const removeHandler = (noteId) => {
        const updatedArr = notes.filter((note) => note.id !== noteId)
        setNotes(updatedArr)
      }

  return (
      <div className="mainArea">
        <div className="inputArea">
          <form onSubmit={submitHandler} className="formArea">
            <input type="text" className="inputField" placeholder='Enter the note name' value={noteTitle} onChange={inputHandler}/>
            <button className="btnAll">{editMode === true ? 'Update Note':'Add a Note'}</button>
          </form>
        </div>
        <div className="noteArea">
          <ul className="listArea">
            {notes.map((note) => (
              <li className="lists" key={note.id}>
                <span>{note.title}</span>
                <button className="btnAll btnInput" onClick={() => editHandler(note)}>Edit</button>
                <button className="btnAll" onClick={() => removeHandler(note.id)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
  )
}

export default App
