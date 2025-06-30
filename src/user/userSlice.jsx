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
      email: "",
      password: "",
      beforeOrAfter: "",
    },
    isLoading: true,
    error: "",
    isShowExersiseImg: false,
    imgLink: "",
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
        password: action.payload.password,
        beforeOrAfter: action.payload.beforeOrAfter,
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
        beforeOrAfter: "",
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
        beforeOrAfter: action.payload.beforeOrAfter,
      };
      state.isLoading = false;
      state.isUpdated = true;
    },
    logIn: (state, action) => {
      state.user = state.user;
      state.isLoading = true;
    },
    isLoadingClicked: (state, action) => {
      (state.user = state.user), (state.isLoading = true);
    },
    isLoadingFalse: (state, action) => {
      (state.user = state.user), (state.isLoading = false);
    },
    exerciseImageHandle: (state, action) => {
      (state.isShowExersiseImg = action.payload.isEnter),
        (state.imgLink = action.payload.img);
    },
  },
});

export const {
  addUser,
  updateUser,
  logOut,
  logIn,
  isLoadingClicked,
  isLoadingFalse,
  exerciseImageHandle,
} = userSlice.actions;

export default userSlice.reducer;
