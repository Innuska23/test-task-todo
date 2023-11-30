import { useEffect } from "react";
import { DEFAULT_LIMIT } from "../../constants/common";
import { usePagination } from "../../hooks/usePagination";
import { useLazyGetToDoApiQuery } from "../../redux/api/ToDoApi";
import { Pagination } from "../Pagination";
import { Header } from "../header";
import { Form } from "./ToDoForm";
import { ToDolist } from "./ToDoList/ToDoList";

export const ToDO = () => {
  const [getTodoList, { data, isLoading }] = useLazyGetToDoApiQuery();
  const { currentPage, offset, pages, setCurrentPage } = usePagination({
    count: data?.total,
    limit: DEFAULT_LIMIT,
  });

  useEffect(() => {
    getTodoList({ limit: DEFAULT_LIMIT, skip: offset });
  }, [currentPage]);

  if (isLoading) return <h1>Loading ...</h1>;

  return (
    <>
      <Header />
      <Form />
      <ToDolist list={data?.todos} />
      <Pagination
        currentPage={currentPage}
        pages={pages}
        onSetPage={setCurrentPage}
      />
    </>
  );
};
