import {
  ToDoListItemBox,
  ToDoListItemButton,
  ToDoListItemWrapper,
  ToDolistItemText,
} from "./ToDoListItem.styled";

export const ToDoListItem = ({ todo, id }) => {
  return (
    <ToDoListItemWrapper>
      <ToDolistItemText>{todo}</ToDolistItemText>
      <ToDoListItemBox>
        <ToDoListItemButton>Edit</ToDoListItemButton>
        <ToDoListItemButton>Done</ToDoListItemButton>
        <ToDoListItemButton>Delete</ToDoListItemButton>
      </ToDoListItemBox>
    </ToDoListItemWrapper>
  );
};
