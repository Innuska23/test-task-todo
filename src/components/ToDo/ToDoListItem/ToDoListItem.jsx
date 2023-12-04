import PropTypes from "prop-types";

import { useState } from "react";
import {
  ToDoListItemBox,
  ToDoListItemWrapper,
  ToDolistItemText,
} from "./ToDoListItem.styled";

import { Input } from "../../Input";
import { Button } from "../../Button";
import { Colors } from "../../../constants/theme";

export const ToDoListItem = ({ isDone, todo, id, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTodoValue, setNewTodoValue] = useState(todo);
  const handleDoneClick = () => {
    onUpdate(id, { isDone: !isDone, todo });
  };

  const handleDeleteClick = () => {
    onDelete(id);
  };

  const handleSaveClick = async () => {
    await onUpdate(id, { isDone, todo: newTodoValue });
    setIsEditing(false);
  };

  const handleTodoChange = (e) => {
    setNewTodoValue(e.target.value);
  };

  if (isEditing) {
    return (
      <ToDoListItemWrapper>
        <Input value={newTodoValue} onChange={handleTodoChange} />
        <ToDoListItemBox>
          <Button color={Colors.success} onClick={handleSaveClick}>
            Save
          </Button>
          <Button color={Colors.error} onClick={() => setIsEditing(false)}>
            Cancel
          </Button>
        </ToDoListItemBox>
      </ToDoListItemWrapper>
    );
  }
  return (
    <ToDoListItemWrapper>
      <ToDolistItemText $isDone={isDone}>{todo}</ToDolistItemText>
      <ToDoListItemBox>
        <Button color={Colors.brown} onClick={() => setIsEditing(true)}>
          Edit
        </Button>
        <Button color={Colors.success} onClick={handleDoneClick}>
          Done
        </Button>
        <Button color={Colors.error} onClick={handleDeleteClick}>
          Delete
        </Button>
      </ToDoListItemBox>
    </ToDoListItemWrapper>
  );
};

ToDoListItem.propTypes = {
  isDone: PropTypes.bool,
  todo: PropTypes.string,
  id: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
};
