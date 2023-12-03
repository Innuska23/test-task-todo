import styled from "@emotion/styled";

export const ToDoListItemWrapper = styled.li`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
`;

export const ToDolistItemText = styled.span`
  margin-right: 10px;
  text-decoration: ${({ $isDone }) => ($isDone ? "line-through" : "none")};
`;

export const ToDoListItemBox = styled.div`
  display: flex;
  gap: 15px;
`;

export const ToDoListItemButton = styled.button`
  border: none;
  border-radius: 10px;
  box-shadow: 0 3px 1px #0000001a, 0 1px 2px #00000014, 0 2px 2px #0000001f;
  cursor: pointer;
  height: 40px;
  width: 50px;
  white-space: nowrap;
  :hover {
    background-color: #ccc;
  }
`;
