import {
  ToDoListItemBox,
  ToDoListItemButton,
  ToDoListItemWrapper,
  ToDolistItemText,
} from "./ToDoListItem.styled";

export const ToDoListItem = () => {
  return (
    <ToDoListItemWrapper>
      <ToDolistItemText> 1234 </ToDolistItemText>
      <ToDoListItemBox>
        <ToDoListItemButton>Edit</ToDoListItemButton>
        <ToDoListItemButton>Done</ToDoListItemButton>
        <ToDoListItemButton>Delete</ToDoListItemButton>
      </ToDoListItemBox>
    </ToDoListItemWrapper>
  );
};
