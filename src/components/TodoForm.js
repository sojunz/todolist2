import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;
// In the TodoForm component, we have a form with an input field and a button. The input field is controlled by the value state variable, and the onChange event handler updates the value state variable whenever the user types in the input field. The handleSubmit function is called when the form is submitted, and it prevents the default form submission behavior. If the value in the input field is empty, the function returns early. Otherwise, it calls the addTodo function with the value in the input field and resets the value state variable to an empty string.