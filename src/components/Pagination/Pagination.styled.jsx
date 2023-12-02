import styled from "@emotion/styled";

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PaginationWrapper = styled.ul`
  display: flex;
  list-style: none;
  gap: 5px;
  margin-top: 25px;
  margin-bottom: 25px;
  align-items: center;
`;

export const PaginationButton = styled.button`
  background-color: #4c91af;
  border: none;
  box-shadow: 0 3px 1px #0000001a, 0 1px 2px #00000014, 0 2px 2px #0000001f;
  border-radius: 5px;
  cursor: pointer;
  height: 30px;
  width: 30px;
  display: inline-block;

  background-color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.blue : theme.colors.white};
  border-color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.blue : theme.colors.white};

  :hover {
    background-color: #ccc;
  }
  :active,
  :focus {
    background-color: ${({ theme }) => theme.colors.blue};
    border: 1px solid ${({ theme }) => theme.colors.blue};
  }
`;

export const PaginationTotal = styled.p`
  margin-left: 120px;
`;
