//use selector isused to etract notes state from store
//use dispatchto reference reducer function in store
import { useState } from "react"
import { useDispatch } from "react-redux"
import { addNote, removeNote } from "./NoteSlice"
import DeleteItem from "./DeleteItem"
import { useSelector } from "react-redux"

const NoteList = () => {
    const [text,setText]=useState('');
    const notes=useSelector(state=>state.note.notes)
    const dispatch=useDispatch();

   
    //add note
    const handleNote=()=>{
        if(text.trim!==''){
            const newNote={
                id:Date.now,
                text:text,
                date:new Date().toLocaleString()
               
            };
            dispatch(addNote(newNote))
            setText('');
        }
    }
  
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="mb-4 ">
        <input
        type="text"
        placeholder="enter note..."
        value={text}
        onChange={(e)=>setText(e.target.value)}
        className='w-full p-3 py-2 border border-gray-400 rounded-md outline-none'/>
        <button
        onClick={handleNote}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Add Note
        </button>
      </div>
      <ul>
        {notes.map(note=>(
            <DeleteItem key={note.id} note={note}
            removeNote={()=> dispatch(removeNote(note.id))}
            
            />
        ))}
      </ul>
    </div>
  )
}

export default NoteList
