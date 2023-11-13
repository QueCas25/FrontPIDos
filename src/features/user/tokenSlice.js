import { createSlice } from '@reduxjs/toolkit'



const initialState = {
    value: "",
}

export const tokenSlice = createSlice({
    name: 'jwt',
    initialState,
    reducers: {
        destroytoken: (state) => {
            state.value =  ""
        },
        settoken: (state, action) => {
            state.value = action.payload
        },
    },
})

export const { destroytoken,settoken } = tokenSlice.actions

export default tokenSlice.reducer