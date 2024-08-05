import { useGetAllNotesQuery, useRemoveNoteMutation } from "../Store/NoteApi";
function NoteList() {

    const {isFetching, isError, error, data: notes } = useGetAllNotesQuery();

    const [removeNote] = useRemoveNoteMutation();

    // const { setEditMode, setEditableNote, setNoteTitle,  AllNotes} = props;

    //     const editHandler = (note) => {
    //         setEditMode(true);
    //         setNoteTitle(note.title);
    //         setEditableNote(note)
    //     }
    //     const removeHandler = (noteId) => {
    //         fetch(`http://localhost:3000/notes/${noteId}`, 
    //             {method: 'DELETE'}
    //         )
    //         .then(() => {
    //             AllNotes()
    //         })
    //     }

 

    if (isFetching) {
        return <h2>Data is Loading......</h2>
    }
    if (isError) {
        return <h2>{error.message}</h2>
    }

        return (
            <div className="NoteListDiv">
                <div className="noteArea">
                    <ul className="listArea">
                        {notes.map((note) => (
                            <li className="lists" key={note.id}>
                                <span>{note.title}</span>
                                <button className="btnAll btnInput" >Edit</button>
                                <button className="btnAll" onClick={() => removeNote(note.id)}>Delete</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        )
}

export default NoteList