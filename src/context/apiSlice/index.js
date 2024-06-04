import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
    reducerPath: "productsApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://6645fbb151e227f23aad44c0.mockapi.io/api/v1/"}),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => "products",
        })
    })
})

export const { useGetAllProductsQuery } = productsApi;