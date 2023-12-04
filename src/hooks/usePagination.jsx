import { useEffect, useState } from "react";

export const usePagination = ({ count, limit, localStorageKey }) => {
  const [currentPage, setCurrentPage] = useState(-1);

  const pages = count ? Array.from(Array(Math.ceil(count / limit)).keys()) : [];

  const offset = currentPage * limit;

  useEffect(() => {
    if (!localStorageKey) return;

    const savedPage = Number(localStorage.getItem(localStorageKey));

    setCurrentPage(savedPage);
  }, [localStorageKey]);

  useEffect(() => {
    if (!localStorageKey || currentPage === -1) return;

    localStorage.setItem(localStorageKey, String(currentPage));
  }, [currentPage, localStorageKey]);

  return {
    offset,
    pages,
    currentPage,
    setCurrentPage,
  };
};
