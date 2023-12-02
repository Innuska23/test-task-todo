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
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.6);
`;
