import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userAuth: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        isUserAuth(state, action) {
            return {
                ...state,
                userAuth: action.payload
            }
        }
    }
})


export const { isUserAuth } = userSlice.actions

export default userSlice.reducer