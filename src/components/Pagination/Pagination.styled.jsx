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
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
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
