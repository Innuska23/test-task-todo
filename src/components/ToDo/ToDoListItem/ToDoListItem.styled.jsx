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
`;

export const ToDoListItemBox = styled.div`
  display: flex;
  gap: 15px;
`;

export const ToDoListItemButton = styled.button`
  border: none;
  border-radius: 10px;
  /* color: #fff; */
  cursor: pointer;
  height: 40px;
  width: 50px;
  white-space: nowrap;
`;