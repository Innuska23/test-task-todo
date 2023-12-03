import styled from "@emotion/styled";

export const InputStyled = styled.input`
  border: 2px solid #ccc;
  outline: 2px solid transparent;
  border-radius: 10px;
  height: 30px;
  padding-left: 10px;
  width: 210px;
  @media (min-width: 768px) {
    height: 40px;
  }
  :focus,
  :active {
    outline: 1px solid #4c91af;
    border-color: #4c91af;
  }
`;
