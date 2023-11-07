import { createSlice } from '@reduxjs/toolkit'
import {decodeToken} from "react-jwt";


const initialState = {
    value: {},
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        destroy: (state) => {
            state.value =  {}
        },
        set: (state, action) => {
            state.value = decodeToken(action.payload)
        },
    },
})

// Action creators are generated for each case reducer function
export const { destroy,set } = userSlice.actions

export default userSlice.reducer