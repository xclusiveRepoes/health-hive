import { configureStore } from "@reduxjs/toolkit";

import userSlice from '../user/userSlice'


const store = configureStore({
    reducer: {
        userSlice: userSlice
    }
})

export default store;