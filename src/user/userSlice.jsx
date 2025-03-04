import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: {
            email: '',
            password: ''
        }
    },
    reducers:{}
})

export default userSlice.reducer;