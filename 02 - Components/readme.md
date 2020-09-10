## 02 - Components

<div align="center">
   <img  alt="Final result" src="https://user-images.githubusercontent.com/4281887/93012758-fde50680-f5cc-11ea-941c-64d0023a86c2.png">
</div>

### Navbar component

1. Create a new folder called `features` inside the `src` folder

2. Create a `Navbar` component that renders the following code:

   ```jsx
   <header>
     <a href="/" className="brand">
       Trendie
     </a>
     <a href="/create-product">Create product</a>
   </header>
   ```

### App component

1. Render the `Navbar` component inside the `App` component

2. Replace the content of the `index.css` file with the content inside the `index.css` from the `start` folder

3. Apply an inline style to the `h1` element:

   ```jsx
   <h1 style={{ padding: '4rem 0', margin: '0 auto', maxWidth: 1200 }}>
     Hello React
   </h1>
   ```
