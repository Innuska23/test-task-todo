import { createApi } from "@reduxjs/toolkit/query/react";
import { client } from "./client";

export const toDoApi = createApi({
  reducerPath: "toDoApi",
  baseQuery: client,
  tagTypes: ["todoList"],
  endpoints: (builder) => ({
    getToDoList: builder.query({
      query: (params) => ({
        url: "/todo",
        params,
      }),
      providesTags: ["todoList"],
    }),
    addPost: builder.mutation({
      query: (body) => ({
        url: "/todo",
        method: "POST",
        body,
      }),
      invalidatesTags: ["todoList"],
    }),
    updateTodo: builder.mutation({
      query: ({ body, id }) => ({
        url: `/todo/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["todoList"],
    }),
    deleteTodo: builder.mutation({
      query: (id) => ({
        url: `/todo/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["todoList"],
    }),
  }),
});

export const {
  useGetToDoListQuery,
  useAddPostMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} = toDoApi;
