## 01 - What is React?

<div align="center">
   <img  alt="Final result" src="https://user-images.githubusercontent.com/4281887/93012694-844d1880-f5cc-11ea-9716-d88d0685011f.png">
</div>

### Setting up the project

1. Create a new react application using the `create-react-app` command line. The following command automatically runs the `npm install` command. Therefore, you do not need to install the dependencies separately

   ```
   npx create-react-app react-app
   ```

2. Start a server

   ```
   cd react-app
   npm start
   ```

3. Open the application in the browser using http://localhost:3000

### Exploring and updating the project

1. Open the project in your editor and explore the project structure

2. Understand the tools used inside the project

3. Remove unused files in the `src` folder:

   - App.css
   - logo.svg
   - serviceWorker.js

4. Remove import statements that cause errors in the `src/App.js` and `src/index.js` files

5. In the `App.js`, replace all elements in the return function with:

   ```jsx
   <h1>Hello React</h1>
   ```
