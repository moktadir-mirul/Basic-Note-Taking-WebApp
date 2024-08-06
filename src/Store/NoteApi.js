import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const NoteApi = createApi({
    reducerPath: 'NoteApi',
    baseQuery: fetchBaseQuery(
        {
            baseUrl: 'http://localhost:3000/'
        }
    ),
    tagTypes: ["notes"],
    endpoints: (builder) => (
        {
            getAllNotes: builder.query(
                {
                    query: () => 'notes',
                    providesTags: ["notes"]
                }
            ),
            createNote: builder.mutation(
                {
                    query: (note) => (
                        {
                            url: 'notes',
                            method: "POST",
                            body: note,                        
                        }
                    ),
                    invalidatesTags: ["notes"]
                }
            ),
            editNote: builder.mutation(
                {
                    query: ({id, ...restNote}) => (
                      {
                        url: `notes/${id}`,
                        method: "PATCH",
                        body: restNote,
                      }  
                    ),
                    invalidatesTags: ["notes"]
                }
            ),
            removeNote: builder.mutation(
                {
                    query: (ID) => (
                        {
                            url: `notes/${ID}`,
                            method: "DELETE"
                        }
                    ),
                    invalidatesTags: ["notes"]
                }
            )
        }
    )
})


export const {  useGetAllNotesQuery, 
                useCreateNoteMutation,
                useEditNoteMutation, 
                useRemoveNoteMutation} = NoteApi;