import { createSlice } from '@reduxjs/toolkit'

export const emptyUser = {
    token: '',
    name: ''
}

export const userSlice = createSlice({
    name: 'user',

    initialState: emptyUser,

    reducers: {
        loginUser: (state, action) => {
            return {
                ...state,
                name: action.payload.user.name,
                token: action.payload.token
            }
        },

        logoutUser: (state, action) => emptyUser
    }
})

export const { loginUser, logoutUser } = userSlice.actions

export default userSlice.reducer