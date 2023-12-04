import styled from "@emotion/styled";

export const ButtonStyled = styled.button`
  background-color: ${({ $color, theme }) => theme.colors[$color]};
  border: none;
  box-shadow: 0 3px 1px #0000001a, 0 1px 2px #00000014, 0 2px 2px #0000001f;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  border-radius: 10px;
  padding: 8px 8px;
  :hover {
    box-shadow: 0 4px 2px #0000001a, 0 2px 3px #00000014, 0 3px 3px #0000001f;
  }

  @media (min-width: 768px) {
    padding: 10px 18px;
  }
`;
