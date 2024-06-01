function NoteList(props) {

    const { setEditMode, setEditableNote, setNoteTitle, notes, setNotes} = props;

        const editHandler = (note) => {
            setEditMode(true);
            setNoteTitle(note.title);
            setEditableNote(note)
        }
        const removeHandler = (noteId) => {
            const updatedArr = notes.filter((note) => note.id !== noteId)
            setNotes(updatedArr)
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