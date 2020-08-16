## 01 - What is React?

1. Create a new react application using the `create-react-app` command line. The following command automatically runs the `npm install` command. Therefore, you do not need to install the dependencies separately

   ```
   npx create-react-app react-app --use-npm
   ```

2. Start a server

   ```
   cd react-app
   npm start
   ```

3. Open the application in the browser using http://localhost:3000

4. Open the project in your editor and explore the project structure

5. Understand the tools used inside the project

6. Remove unused files in the `src` folder:

   - App.css
   - logo.svg
   - serviceWorker.js

7. Remove import statements that cause errors in the `src/App.js` and `src/index.js` files

8. In the `App.js`, replace all elements in the return function with

   ```jsx
   <h1>Hello React</h1>
   ```
