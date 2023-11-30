import { useState } from "react";

export const usePagination = ({ count, limit }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const pages = count ? Array.from(Array(Math.ceil(count / limit)).keys()) : [];

  const offset = currentPage * limit;

  return {
    offset,
    pages,
    currentPage,
    setCurrentPage,
  };
};
