import { configureStore } from '@reduxjs/toolkit'
import { productsApi } from './apiSlice'
import { setupListeners } from '@reduxjs/toolkit/query'
import wishlistSlice from './wishlistSlice';
import hideBtnSlice from './hideBtnSlice';
import addToCardSlice  from './addToCard';

export const store =  configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    wishlist: wishlistSlice,
    hideButton: hideBtnSlice,
    addTocard: addToCardSlice

  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware),
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware),

});

setupListeners(store.dispatch)

