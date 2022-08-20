## 11 - React Router

<div align="center">
   <img  alt="Final result" src="https://user-images.githubusercontent.com/4281887/93014110-65ed1a00-f5d8-11ea-9fef-01f9cd812673.png">
</div>

### Prerequisite

1. Install the `react-router-dom` package:

   ```bash
   npm install react-router-dom --save
   ```

### Setting up the router

1. In the `index.js` file, import the `BrowserRouter` component and use it to wrap to `App` component:

   ```jsx
   <React.StrictMode>
     <BrowserRouter>
       <App />
     </BrowserRouter>
   </React.StrictMode>
   ```

2. In the `App` component, use the `Routes` and `Route` component to setup these two paths:

   ```jsx
   <Container>
     <Routes>
       <Route path="/create-product" element=<AddForm /> />
       <Route path="/" element={<Home />} />
     </Routes>
   </Container>
   ```

   > You will not be able to add a new product, we will fix it in the next lesson. Moreover, there will be the `Failed prop type: The prop `addProduct`is marked as required...` in the console. Ignore it for now

3. In the `Home` component, remove the rendering of `AddForm` component, the `addProduct` function, and the `currentProductId` variable

### Using the Link component

1. Update the `Navbar` and `Product` components to use the `Link` component instead of the `a` element

### Creating the UpdateForm component

1. Create a `UpdateForm` component in the `Product` folder
2. Create `name`, `imageURL`, and `type` states, their initial states should be set to empty string
3. Render the following code

   ```jsx
   <>
     <h1>Update Product</h1>
     <form id="create-form">
       <div className="input-group">
         <label htmlFor="name">Name</label>
         <input name="name" type="text" id="name" />
       </div>

       <div className=" input-group">
         <label htmlFor="imageURL">Image URL</label>
         <input name="imageURL" type="text" id="imageURL" />
       </div>

       <div className=" input-group">
         <label htmlFor="type">Type</label>
         <input name="type" type="text" id="type" />
       </div>

       <button type="button" className="UpdateForm__delete-button">
         Delete restaurant
       </button>
       <button type="submit">Update product</button>
     </form>
   </>
   ```

4. Each input field, set a `value` property and bind an `onChange` event

5. Use the `useParams` hook to read the `id` variable from the path:

   ```jsx
   const { id } = useParams();
   console.log(id);
   ```

   > Note that the `console.log` always prints twice. This is because of the `React.StrictMode` component that tries to detect wrong usage of any side effect. It does this by rendering twice. In the production mode, the `React.StrictMode` component doesn't run. Therefore, the rendering twice problem will not occur

6. In the `App` component, add another route for the `/update-product/:id` path:

   ```jsx
   <Route path="/update-product/:id" element={<UpdateForm />} />
   ```

### Lifting the state up

> Currently, the fetching API stays inside the `Home` component which means that the `products` data will be available only if users access the main page first. However, we just created a couple of pages that also need to use the `products` data. Therefore, we will need to lift the state up to the `App` component

1. In the `Home` company:

   - Move the `products` state and the `useEffect` hook to the `App` component
   - Accept a new property called `products`
   - Move the conditionally rendering of the loading products to the `App` component

2) In the `App` component:

   - Pass the `products` state as a property to the `Home` component

     ```jsx
     <Container>
       {products.length > 0 ? (
         <Routes>
           <Route path="/create-product" element={<AddForm />} />
           <Route path="/update-product/:id" element={<UpdateForm />} />
           <Routes path="/" element={<Home products={products} />} />
         </Routes>
       ) : (
         <div>Loading products....</div>
       )}
     </Container>
     ```
