## 05 - Handling Events

### Creating a form validation

**Input component**

1. Create an Input component
2. It should accept `type`, `value`, `onChange` as properties and render an input element

**Form component**

1. Create a Form component
2. It should render a form element
3. Create two states to be passed to two Input components
4. Create an `onChange` handler that is used to update the state
5. Inside the form element, it should render the two Input components
   - Input component with "email" type
   - Input component with "password" type
6. While a user types in the input fields, validate the length of the input data:
   - If it is less than 8 characters, change the border of the input field to red
   - Otherwise, change the border of the input field to green
