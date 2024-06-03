function NoteList(props) {

    const { setEditMode, setEditableNote, setNoteTitle, notes, AllNotes} = props;

        const editHandler = (note) => {
            setEditMode(true);
            setNoteTitle(note.title);
            setEditableNote(note)
        }
        const removeHandler = (noteId) => {
            fetch(`http://localhost:3000/notes/${noteId}`, 
                {method: 'DELETE'}
            )
            .then(() => {
                AllNotes()
            })
        }

        return (
            <div className="NoteListDiv">
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

export default NoteList