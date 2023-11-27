import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    value: "",
}

export const idSlice = createSlice({
    name: 'id',
    initialState,
    reducers: {
        destroyid: (state) => {
            state.value =  ""
        },
        setid: (state, action) => {
            state.value = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { destroyid,setid } = idSlice.actions

export default idSlice.reducer