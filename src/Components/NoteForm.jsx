
function NoteForm(props) {

  const { noteTitle, setNoteTitle, notes, setNotes, editMode, setEditMode, editableNote, setEditableNote } = props;

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