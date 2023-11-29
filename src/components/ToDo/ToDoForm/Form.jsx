import { FormButton, FormInput, FormWrapper } from "./Form.styled";

export const Form = () => {
  return (
    <FormWrapper>
      <FormInput
        autoComplete="off"
        type="text"
        name="name"
        placeholder="Enter task..."
        required
      />
      <FormButton>Add</FormButton>
    </FormWrapper>
  );
};
