import styled from "@emotion/styled";

export const PaginationWrapper = styled.ul`
  display: flex;
  list-style: none;
  justify-content: center;
  height: 30px;
  gap: 5px;
  margin-top: 25px;
  margin-bottom: 25px;
`;

export const PaginationButton = styled.button`
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  cursor: pointer;
  height: 30px;
  width: 30px;
  display: inline-block;

  :hover {
    background-color: #ccc;
  }
  :active,
  :focus {
    background-color: #007bff;
    border: 1px solid #007bff;
    /* color: #fff; */
  }
`;
