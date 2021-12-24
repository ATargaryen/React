import { createSlice } from '@reduxjs/toolkit'

const initialStateValue = { name : "Aman Chaudhary" , email : "amanch.2812@gmail.com" , phone : "9870762173"};
export const userSlice = createSlice({
  name: 'user',
  initialState: {
    value: initialStateValue,
  },
  reducers: {
    login: (state , action ) => {
      state.value =  action.payload
    },
    logout: (state) => {
    //   state.value = initialStateValue
      state.value = { name : "Aman Ponia" , email : "amanch.2812@gmail.com" , phone : "9870762173"};
    },
  },
})

// Action creators are generated for each case reducer function
export const { login, logout } = userSlice.actions

export default userSlice.reducer