import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userData: {},
  userToken: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, { payload }) => {
      console.log("payload",payload)
      state.userData = payload.user
      state.userToken = payload.token
    },
    updateUserData: (state, { payload }) => {
      state.userData = payload.user.user
    },
    removeUser: (state) => {
      state.userData = {};
      state.userToken = null;
      localStorage.clear();
    
    },
    addData: (state, { payload }) => {
      console.log(payload)
      state[payload.name] = payload.value
    },
  },
  extraReducers: {},
})

// Action creators are generated for each case reducer function
export const { addUser, removeUser, updateUserData, addData } = userSlice.actions

export default userSlice.reducer