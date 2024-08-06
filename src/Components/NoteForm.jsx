import { useCreateNoteMutation, useEditNoteMutation } from "../Store/NoteApi";


function NoteForm(props) {

  const [createNote] = useCreateNoteMutation();
  const [updateNote] = useEditNoteMutation();

  const { note, setNote, editMode, setEditMode, editableNote} = props;

    const inputHandler = (input) => {
        setNote({...note, [input.target.name] : input.target.value})
      }


    const createHandler = () => {
        createNote(note);
        setNote({title: ''});
      }

    const updateHandler = (note) => {
        note.id === editableNote ? setNote({...note, title: note.title}):setNote(note);
        updateNote(note);
        setEditMode(false);
        setNote({title: ''})
      }

    const submitHandler = (event) => {
      event.preventDefault();
      if(note.title.trim() === '') return alert('Please enter a note name');
      editMode ===  true ? updateHandler(note) : createHandler();
      console.log(note, "update")
    }

    return (
        <div className="formDiv">
            <div className="inputArea">
                <form onSubmit={submitHandler}  className="formArea">
                    <input name="title" type="text" className="inputField" placeholder='Enter the note name'  value={note.title} onChange={inputHandler}/>
                    <button className={editMode === false ? "btnAll":"editMode"}>{editMode === true ? 'Update Note':'Add a Note'}</button>
                </form>
            </div>
        </div>
    )
}

export default NoteForm