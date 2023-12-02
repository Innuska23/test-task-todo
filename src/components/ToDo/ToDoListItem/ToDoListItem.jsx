import {
  ToDoListItemBox,
  ToDoListItemButton,
  ToDoListItemWrapper,
  ToDolistItemText,
} from "./ToDoListItem.styled";

export const ToDoListItem = ({ isDone, todo, id, onDelete, onUpdate }) => {
  const handleDoneClick = () => {
    onUpdate(id, { isDone: !isDone, todo });
  };

  const handleDeleteClick = () => {
    onDelete(id);
  };

  return (
    <ToDoListItemWrapper>
      <ToDolistItemText $isDone={isDone}>{todo}</ToDolistItemText>
      <ToDoListItemBox>
        <ToDoListItemButton>Edit</ToDoListItemButton>
        <ToDoListItemButton onClick={handleDoneClick}>Done</ToDoListItemButton>
        <ToDoListItemButton onClick={handleDeleteClick}>
          Delete
        </ToDoListItemButton>
      </ToDoListItemBox>
    </ToDoListItemWrapper>
  );
};
