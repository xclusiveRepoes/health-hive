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
      uid: ''
    },
    isLoading: true,
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
      };
      state.isLoading = false;
      state.isUpdated = false;
    },

    logOut: (state, action) => {
      state.user.name = "";
      state.user.weight = "";
      state.user.height = "";
      state.user.bloodPressure = "";
      state.user.sugarLevel = "";
      state.user.diabeticHistory = "";
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
    }
  },
});

export const { addUser, updateUser, logOut } = userSlice.actions;

export default userSlice.reducer;
