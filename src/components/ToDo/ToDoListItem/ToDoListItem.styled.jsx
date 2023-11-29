import styled from "@emotion/styled";

export const ToDoListItemWrapper = styled.li`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ToDolistItemText = styled.span`
  margin-right: 10px;
`;

export const ToDoListItemBox = styled.div`
  display: flex;
  gap: 15px;
`;

export const ToDoListItemButton = styled.button`
  border: none;
  border-radius: 10px;
  cursor: pointer;
  height: 40px;
  padding: 10px;
  white-space: nowrap;
`;
