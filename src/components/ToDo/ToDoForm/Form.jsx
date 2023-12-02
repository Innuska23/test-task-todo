import { useAddPostMutation } from "../../../redux/api/ToDoApi";
import { FormButton, FormInput, FormWrapper } from "./Form.styled";

export const Form = (todo, isDone) => {
  const [addTodo, { data }] = useAddPostMutation();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
    addTodo({ todo: e.target[0].value, isDone: false });
    e.target.reset();
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <FormInput
        autoComplete="off"
        type="text"
        name="name"
        placeholder="Enter task..."
        required
      />
      <FormButton type="submit">Add</FormButton>
    </FormWrapper>
  );
};
