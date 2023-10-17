# Todo App using useReducer

- useReducer always use two arguments one is intialValue and other is reducer function.
- This Reducer function consist of switch condition, work depends on the case value.

## Task

- Have an add button in todo add form.
- Add update button for each todo.
- Have strike through effect for a todo that is done.
- Save to local storage upon each state change
- Add, list and edit todos should be their own component
- Validation for add and edit forms. At least 5 characters needed for a todo text
- BONUS: add draggable feature to a todo item.

## Todo App

- consist of todo add Form and todoList.

### todoAddForm

- component for todoAddForm is created with add button.
- validated for atleast 5 characters to add todoText.

### TodoList

- component is created for todoList that contains the list of todos with checkbox. Each todos consist of Edit and Delete Button.
- Created a separate component to display todo and editForm.
- Save the data in the Local Storage with name "My-Todo"
