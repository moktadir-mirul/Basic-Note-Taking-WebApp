
function NoteForm(props) {

  const { noteTitle, setNoteTitle, notes, setNotes, editMode, setEditMode, editableNote, setEditableNote, AllNotes } = props;

    const inputHandler = (input) => {
        setNoteTitle(input.target.value)
      }

      const createHandler = () => {
                    const newNote = {
                                      id: Date.now()+'',
                                      title: noteTitle
                                    }
              fetch('http://localhost:3000/notes', 
              { method: "POST",
                body: JSON.stringify(newNote),
                headers: {'content-type': 'application/json'}
              })
              .then(() => {
                AllNotes()           
              })
          // setNotes([...notes, newNote]);
          setNoteTitle('');
      }

      const updateHandler = () => {
        // const updatedNoteArr = notes.map((note) => {
        //   if(note.id === editableNote.id) {
        //     return {
        //             ...note,
        //             title: noteTitle
        //           }
        //   }
        //     return note
        // })
        fetch(`http://localhost:3000/notes/${editableNote.id}`, 
          {method: "PATCH",
          body: JSON.stringify({title: noteTitle}),
          headers: {'content-type': 'application/json'},
        })
        .then(res => res.json())
        .then(() => {
          AllNotes()
        })
        // setNotes(updatedNoteArr);
        setEditMode(false);
        setNoteTitle('');
        setEditableNote(null);
      }

      const submitHandler = (event) => {
        event.preventDefault();
        if (noteTitle.trim() === '') return alert('Please enter a note name');
        editMode === true ? updateHandler():createHandler();
      }

    return (
        <div className="formDiv">
            <div className="inputArea">
                <form onSubmit={submitHandler} className="formArea">
                    <input type="text" className="inputField" placeholder='Enter the note name' value={noteTitle} onChange={inputHandler}/>
                    <button className={editMode === false ? "btnAll":"editMode"}>{editMode === true ? 'Update Note':'Add a Note'}</button>
                </form>
            </div>
        </div>
    )
}

export default NoteForm