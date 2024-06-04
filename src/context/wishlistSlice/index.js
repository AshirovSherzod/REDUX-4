import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: JSON.parse(localStorage.getItem("wishlists")) || []
}

export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addWishList: (state, action) => {
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
        localStorage.setItem("wishlists", JSON.stringify(state.value))
        console.log(state.value);
    }
  },
})

// Action creators are generated for each case reducer function
export const { addWishList} = wishlistSlice.actions

export default wishlistSlice.reducer