import styled from "@emotion/styled";

export const HeaderWrapper = styled.div`
  display: flex;
  padding-right: 75px;
  align-self: stretch;
  justify-content: center;
  margin-bottom: 40px;
`;

export const HeaderText = styled.h1`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.black};
`;
