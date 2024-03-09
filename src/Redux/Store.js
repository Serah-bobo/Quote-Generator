//configureStore is a function provided by redux toolkit which simplifies craeting a redux store
//a store is where state of your application is stored
//a reducer is a function that takes current state and returns new state based on action


import { configureStore } from "@reduxjs/toolkit"
 import noteReducer from './NoteSlice'

const Store = configureStore({
    reducer:{
     note:noteReducer,
    }
})

export default Store
