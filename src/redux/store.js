import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { toDoApi } from "./api/ToDoApi";

export const store = configureStore({
  reducer: {
    [toDoApi.reducerPath]: toDoApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(toDoApi.middleware),
});

setupListeners(store.dispatch);
