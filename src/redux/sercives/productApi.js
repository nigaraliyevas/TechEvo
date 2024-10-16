import { createApi , fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Create the API
export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({ 
        baseUrl: "http://ec2-54-146-26-87.compute-1.amazonaws.com:8081/api/v1/" 
    }),    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => 'product/getAllProducts',
            providesTags: ['Products'],
        }),
    }),
    keepUnusedDataFor: 60,
});

export const { useGetProductsQuery } = productApi;
