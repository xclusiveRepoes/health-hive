import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {
      name: "",
      weight: "",
      height: "",
      bloodPressure: "",
      sugarLevel: "",
      diabeticHistory: "",
      idUpdated: false,
      uid: "",
      email: '',
      password: ''
    },
    isLoading: false,
    error: "",
  },
  reducers: {
    addUser: (state, action) => {
      state.user = {
        ...state.user,
        uid: action.payload.uid,
        name: action.payload.name,
        weight: action.payload.weight,
        height: action.payload.height,
        bloodPressure: action.payload.bloodPressure,
        sugarLevel: action.payload.sugarLevel,
        diabeticHistory: action.payload.diabeticHistory,
        email: action.payload.email,
        password: action.payload.password
      };
      state.isLoading = false;
      state.isUpdated = false;
    },

    logOut: (state) => {
      state.user = {
        name: "",
        weight: "",
        height: "",
        bloodPressure: "",
        sugarLevel: "",
        diabeticHistory: "",
        uid: "",
      };
      state.isLoading = false;
      state.isUpdated = false;
    },
    updateUser: (state, action) => {
      state.user = {
        ...state.user,
        weight: action.payload.weight,
        height: action.payload.height,
        bloodPressure: action.payload.bloodPressure,
        sugarLevel: action.payload.sugarLevel,
        diabeticHistory: action.payload.diabeticHistory,
      };
      state.isLoading = false;
      state.isUpdated = true;
    },
    logIn: (state, action) => {
      state.user = state.user;
      state.isLoading = true;
    },
  },
});

export const { addUser, updateUser, logOut, logIn } = userSlice.actions;

export default userSlice.reducer;
