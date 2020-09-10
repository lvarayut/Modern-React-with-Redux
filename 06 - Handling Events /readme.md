## 06 - Handling Events

<div align="center">
   <img  alt="Final result" src="https://user-images.githubusercontent.com/4281887/93013787-cfb7f480-f5d5-11ea-9aea-bf025f264b17.png">
</div>

### AddForm component

1. Create an `AddForm` component in the `Product` folder
2. Accept an `addProduct` property, which is a function used to add a new product
3. Create `name`, `imageURL`, and `type` states, their initial states should be set to empty string
4. Render the following code

   ```jsx
   <div>
     <h1>Add Product</h1>
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

       <button type="submit">Add product</button>
     </form>
   </div>
   ```

5. Each input field, set a `value` property and bind an `onChange` event
6. Bind an `onSubmit` event to the `form` element, it should call the `addProduct` function and pass a new product object as:

   ```jsx
   addProduct({ name, type, imageURL });
   ```

   > Note that you also need to use event.preventDefault() to prevent the page from refreshing

7. Use the `prop-types` package to validate the property

### Home component

1. Create a `currentProductId` variable outside of the functional component and set it to `9`

2. Create the `addProduct` function:

   ```jsx
   function addProduct(product) {
     const newProduct = { id: ++currentProductId, ...product };
     setProducts([...products, newProduct]);
   }
   ```

3. Render the `AddForm` component and pass the `addProduct` function as a property
