import { configureStore } from '@reduxjs/toolkit'
import { productsApi } from './apiSlice'
import { setupListeners } from '@reduxjs/toolkit/query'
import wishlistSlice from './wishlistSlice';
import hideBtnSlice from './hideBtnSlice';

export const store =  configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    wishlist: wishlistSlice,
    hideButton: hideBtnSlice

  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware),
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware),

});

setupListeners(store.dispatch)

