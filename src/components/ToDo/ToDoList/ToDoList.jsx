import {
  useAddPostMutation,
  useDeleteTodoMutation,
  useUpdateTodoMutation,
} from "../../../redux/api/ToDoApi";
import { ToDoListItem } from "../ToDoListItem";
import { ToDoListWrapper } from "./ToDoList.styled";

export const ToDoList = ({ list }) => {
  const [addTodo, { data }] = useAddPostMutation();
  const [deleteTodo] = useDeleteTodoMutation();
  const [updateTodo] = useUpdateTodoMutation();

  const handlerAddProduct = (id, todo) => {
    addTodo({ id, body: todo });
  };

  const handleDeleteTodo = (id) => {
    deleteTodo(id);
  };

  const handleUpdateTodo = (id, body) => {
    updateTodo({ id, body });
  };

  return (
    <ToDoListWrapper>
      {list?.map(({ id, isDone, todo }) => (
        <ToDoListItem
          key={id}
          todo={todo}
          id={id}
          isDone={isDone}
          onAdd={handlerAddProduct}
          onDelete={handleDeleteTodo}
          onUpdate={handleUpdateTodo}
        />
      ))}
    </ToDoListWrapper>
  );
};
