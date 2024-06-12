import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
    reducerPath: "productsApi",
    tagTypes: ["Products"],
    baseQuery: fetchBaseQuery({
        baseUrl: "https://6645fbb151e227f23aad44c0.mockapi.io/api/v1"
    }),

    endpoints: (builder) => ({

        getAllProducts: builder.query({
            query: () => "/products",
            providesTags: ["Products"]
        }),

        deleteProducts: builder.mutation({
            query: (id) => ({
                url: `/products/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["Products"]
        }),

        postProduct: builder.mutation({
            query: (body) => ({
                url: "/products",
                method: "POST",
                body
            }),
            invalidatesTags: ["Products"]
        }),

        singleProduct: builder.query({
            query: (id) => ({
                url: `/products/${id}`,
                method: "GET"
            }),
            invalidatesTags: ["Products"]
        }),
      


    })
})

export const { useGetAllProductsQuery, useDeleteProductsMutation, usePostProductMutation, useSingleProductQuery } = productsApi;