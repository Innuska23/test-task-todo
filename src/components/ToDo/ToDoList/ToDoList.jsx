import { ToDoListItem } from "../ToDoListItem";
import { ToDoListWrapper } from "./ToDoList.styled";

export const ToDolist = ({ list }) => {
  return (
    <ToDoListWrapper>
      {list?.map(({ id, todo }) => (
        <ToDoListItem key={id} todo={todo} id={id} />
      ))}
    </ToDoListWrapper>
  );
};
