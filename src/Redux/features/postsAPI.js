import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const postsAPI = createApi({
    reducerPath: 'posts',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com'
    }),
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: () => '/posts',
        }),
        getPost: builder.query({
            query: (id) => `/posts/${id}`
        }),

        /**
         * Uncaught (in promise) Error: Actions must be plain objects. Use custom middleware for async actions.
    at Object.performAction (<anonymous>:1:41503)
         */
        setPost: builder.mutation({
            query: post => ({
                url: '/posts',
                method: 'POST',
                body: post
            })
        })
    })
})

export const { useGetPostsQuery, useGetPostQuery, useSetPostMutation } = postsAPI