import { useMemo } from "react";
import { DEFAULT_LIMIT } from "../../constants/common";
import { usePagination } from "../../hooks/usePagination";
import { useGetToDoListQuery } from "../../redux/api/ToDoApi";
import { Pagination } from "../Pagination";
import { Form } from "./ToDoForm";
import { ToDoList } from "./ToDoList/ToDoList";
import { Header } from "../Header";

export const ToDO = () => {
  const { data, isLoading } = useGetToDoListQuery();
  const { currentPage, offset, pages, setCurrentPage } = usePagination({
    count: data?.length,
    limit: DEFAULT_LIMIT,
    localStorageKey: "TODO:pagination-todo-list",
  });

  const todos = useMemo(() => {
    if (!data) return [];

    return data.slice(offset, offset + DEFAULT_LIMIT);
  }, [data, offset]);

  if (isLoading) return <h1>Loading ...</h1>;

  return (
    <>
      <Header />
      <Form />
      <ToDoList list={todos} />
      <Pagination
        currentPage={currentPage}
        pages={pages}
        onSetPage={setCurrentPage}
      />
    </>
  );
};
