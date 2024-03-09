//createSlice helps in creating a slice reducer by combining  action creators and reducer logic to single unit makes it mutable too
//a slice it is a portion of application state  it contains name initialstate and reducer function
//reducer function  manages state for that specific slice
//action.payload is data attached to object when dispatched
import { createSlice } from "@reduxjs/toolkit";


const NoteSlice = createSlice({
    name:'note',
    initialState:{
        notes:[]
    },
    reducers:{
        addNote:(state,action)=>{
            state.notes.push(action.payload);
        },
        removeNote:(state,action)=>{
            state.notes=state.notes.filter(note=> note.id!==action.payload)
        }    }
})
export const{addNote,removeNote}=NoteSlice.actions;//to allow other parts of applications to dispatch this actions
export default NoteSlice.reducer//make it accessible to other partz
