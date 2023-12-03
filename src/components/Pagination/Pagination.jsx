import PropTypes from "prop-types";

import {
  PaginationBlankItem,
  PaginationButton,
  PaginationContainer,
  PaginationTotal,
  PaginationWrapper,
} from "./Pagination.styled";

export const Pagination = ({ pages, currentPage, onSetPage }) => {
  const after = currentPage === 0 ? 3 : 2;
  const before = currentPage === pages?.length - 1 ? 2 : 1;

  const startIndex = currentPage - before <= 0 ? 0 : currentPage - before;
  const endIndex =
    currentPage + after >= pages?.length ? pages?.length : currentPage + after;

  const handleSetPage = (pageN) => () => {
    onSetPage(pageN);
  };

  return (
    <PaginationContainer>
      <PaginationBlankItem></PaginationBlankItem>
      <PaginationWrapper>
        <li>
          <PaginationButton
            onClick={handleSetPage(currentPage - 1)}
            disabled={currentPage === 0}
          >
            {"<"}
          </PaginationButton>
        </li>
        {pages?.slice(startIndex, endIndex).map((page) => (
          <li key={page}>
            <PaginationButton
              onClick={handleSetPage(page)}
              $isActive={page === currentPage}
            >
              {page + 1}
            </PaginationButton>
          </li>
        ))}
        <li>
          <PaginationButton
            onClick={handleSetPage(currentPage + 1)}
            disabled={currentPage === pages?.length - 1}
          >
            {">"}
          </PaginationButton>
        </li>
      </PaginationWrapper>
      <PaginationTotal>Total pages: {pages.length}</PaginationTotal>
    </PaginationContainer>
  );
};

Pagination.propTypes = {
  pages: PropTypes.arrayOf(PropTypes.number),
  currentPage: PropTypes.number,
  onSetPage: PropTypes.func.isRequired,
};
