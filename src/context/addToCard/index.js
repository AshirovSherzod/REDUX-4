import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: JSON.parse(localStorage.getItem("addToCard")) || []
}

export const addToCardSlice = createSlice({
  name: 'addToCard',
  initialState,
  reducers: {
    addToCard: (state, action) => {
        let index = state.value.findIndex(
            (el) => el.id === action.payload.id
        );
        if (index < 0) {
            state.value = [...state.value, action.payload];
        } else {
            state.value = state.value.filter(
                (el) => el.id !== action.payload.id
            );
        }
        localStorage.setItem("addToCard", JSON.stringify(state.value))
    }
  },
})

// Action creators are generated for each case reducer function
export const { addToCard} = addToCardSlice.actions

export default addToCardSlice.reducer