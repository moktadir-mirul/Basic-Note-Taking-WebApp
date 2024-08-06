import { configureStore } from "@reduxjs/toolkit";
import { NoteApi } from "./NoteApi";


const NoteReducer = {
                        [NoteApi.reducerPath] : NoteApi.reducer
}

export const store = configureStore({
            reducer: NoteReducer,
            middleware: (gDM) => gDM().concat(NoteApi.middleware)
})