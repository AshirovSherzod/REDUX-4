import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: false,
}

export const hideButtonSlice = createSlice({
  name: 'hideButton',
  initialState,
  reducers: {
    isClick: (state, action) => {    
        state.value = !action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { hideButton} = hideButtonSlice.actions

export default hideButtonSlice.reducer