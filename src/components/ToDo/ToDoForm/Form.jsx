import { useAddPostMutation } from "../../../redux/api/ToDoApi";

import { Button } from "../../Button";
import { Input } from "../../Input";
import { FormWrapper } from "./Form.styled";

export const Form = () => {
  const [addTodo] = useAddPostMutation();
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({ todo: e.target[0].value, isDone: false });
    e.target.reset();
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <Input
        autoComplete="off"
        type="text"
        name="name"
        placeholder="Enter task..."
        required
      />
      <Button type="submit">Add</Button>
    </FormWrapper>
  );
};
