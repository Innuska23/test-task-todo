import {
  PaginationButton,
  PaginationContainer,
  PaginationTotal,
  PaginationWrapper,
} from "./Pagination.styled";

const before = 1;

export const Pagination = ({ pages, currentPage, onSetPage }) => {
  const startIndex = currentPage - before <= 0 ? 0 : currentPage - before;

  const after = currentPage === 0 ? 3 : 2;
  const endIndex =
    currentPage + after >= pages?.length ? pages?.length : currentPage + after;

  const handleSetPage = (pageN) => () => {
    onSetPage(pageN);
  };

  return (
    <PaginationContainer>
      <div></div>
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
      <PaginationTotal>TOTAL PAGE: {pages.length}</PaginationTotal>
    </PaginationContainer>
  );
};
