import { createApi } from "@reduxjs/toolkit/query/react";
import { client } from "./client";

export const toDoApi = createApi({
  reducerPath: "toDoApi",
  baseQuery: client,
  endpoints: (builder) => ({
    getToDoApi: builder.query({
      query: (params) => ({
        url: "/todos",
        params,
      }),
    }),
  }),
});

export const { useLazyGetToDoApiQuery } = toDoApi;
