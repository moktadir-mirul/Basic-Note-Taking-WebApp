import { useGetAllNotesQuery, useRemoveNoteMutation } from "../Store/NoteApi";

function NoteList(props) {

    const {isFetching, isError, error, data: notes } = useGetAllNotesQuery();

    const [removeNote] = useRemoveNoteMutation();

    const { setNote, setEditMode, setEditableNote} = props;

        const editHandler = (note) => {
            console.log(note, "=Note")
            setEditMode(true);
            setNote(note);
            setEditableNote(note.id);
        }

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
                                <button className="btnAll btnInput" onClick={() => editHandler(note)}>Edit</button>
                                <button className="btnAll" onClick={() => removeNote(note.id)}>Delete</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        )
}

export default NoteList