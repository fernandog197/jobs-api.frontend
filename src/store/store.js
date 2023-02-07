import { configureStore } from '@reduxjs/toolkit'
import userSliceReducer from './reducers/user'

export default configureStore ({
    reducer: {
        user: userSliceReducer
    }
})