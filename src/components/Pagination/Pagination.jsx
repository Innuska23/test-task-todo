import { PaginationButton, PaginationWrapper } from "./Pagination.styled";

export const Pagination = () => {
  return (
    <PaginationWrapper>
      <li>
        <PaginationButton>{"<"}</PaginationButton>
      </li>
      <li>
        <PaginationButton>1</PaginationButton>
      </li>
      <li>
        <PaginationButton>2</PaginationButton>
      </li>
      <li>
        <PaginationButton>3</PaginationButton>
      </li>
      <li>
        <PaginationButton>{">"}</PaginationButton>
      </li>
    </PaginationWrapper>
  );
};
