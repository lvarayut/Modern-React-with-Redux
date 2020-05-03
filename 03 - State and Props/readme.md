## 03 - State & Props

### Button component properties

1. In the "Button.js", update the Button component to accept a "children" property
2. In the "App.js", set the content of the "Button" component to "Change button color"
3. Install the "prop-types" package by using:
   ```
   npm install --save prop-types
   ```
4. In the "Button.js", import the "prop-types" package and use it validate all the Button properties

### Button component state

1. In the "Button.js", create a new function called "onClick"
2. In the "onClick" function, change the target element color and background color to "white" and "chocolate" respectively
3. Bind an "onClick" event to the button element, when the button gets clicked, call the "onClick" function created in the previous step
