import { useCreateNoteMutation } from "../Store/NoteApi";
import { useState } from "react";

const primary = { title : ''}
function NoteForm(props) {

  const [createNote] = useCreateNoteMutation()

  const [note, setNote] = useState(primary);

  // const { noteTitle, setNoteTitle, editMode, setEditMode, editableNote, setEditableNote, AllNotes } = props;

    const inputHandler = (input) => {
        setNote({...note, [input.target.name]: input.target.value})
      }

  //     const createHandler = () => {
  //                   const newNote = {
  //                                     id: Date.now()+'',
  //                                     title: noteTitle
  //                                   }
  //             fetch('http://localhost:3000/notes', 
  //             { method: "POST",
  //               body: JSON.stringify(newNote),
  //               headers: {'content-type': 'application/json'}
  //             })
  //             .then(() => {
  //               AllNotes()           
  //             })
  //         setNoteTitle('');
  //     }

  //     const updateHandler = () => {
  //       fetch(`http://localhost:3000/notes/${editableNote.id}`, 
  //         {method: "PATCH",
  //         body: JSON.stringify({title: noteTitle}),
  //         headers: {'content-type': 'application/json'},
  //       })
  //       .then(res => res.json())
  //       .then(() => {
  //         AllNotes()
  //       })
  //       setEditMode(false);
  //       setNoteTitle('');
  //       setEditableNote(null);
  //     }
      
  //     const submitHandler = (event) => {
  //       event.preventDefault();
  //       if (noteTitle.trim() === '') return alert('Please enter a note name');
  //       editMode === true ? updateHandler():createHandler();
  //     }

  // className={editMode === false ? "btnAll":"editMode"}>{editMode === true ? 'Update Note':'Add a Note'}

    const submitHandler = (event) => {
      event.preventDefault();
      if(note.title.trim() === '') return alert('Please enter a note name');
      createNote(note);
      setNote(primary);
    }
    // onChange={inputHandler}
    // value={noteTitle}
    return (
        <div className="formDiv">
            <div className="inputArea">
                <form onSubmit={submitHandler}  className="formArea">
                    <input name="title" type="text" className="inputField" placeholder='Enter the note name'  value={note.title} onChange={inputHandler}/>
                    <button>Add a Note</button>
                </form>
            </div>
        </div>
    )
}

export default NoteForm