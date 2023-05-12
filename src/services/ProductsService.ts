import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

export const productsAPI = createApi({
  reducerPath: 'productsAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://645b71d199b618d5f31b7212.mockapi.io',
  }),
  endpoints: (build) => ({
    fetchAllProducts: build.query({
      query: () => ({
        url: '/items',
      }),
    }),
  }),
})
