## 04 - State & Props

<div align="center">
   <img  alt="Final result" src="https://user-images.githubusercontent.com/4281887/93013658-ad71a700-f5d4-11ea-9dcf-ffa388e830b6.png">
</div>

### Container component

1. Create a `Container` component inside the `features` folder. The component should accept a `children` property

2. Render the follow code:
   ```jsx
   <main>{children}</main>
   ```

### App component

1. Wrap the `h1` element with the `Container` component
2. Remove the inline style of the `h1` element

### Home component

1. Create a new folder in the `src` directory called `app`

2. Copy the `app/data.js` file from the `start` folder to the `app` folder

3. Create a `Home` component inside the `features` folder

4. Import the data from the `app/data.js`
5. Create a new state called `products` and set the imported data as its initial value
6. Render the following code:

   ```jsx
   <div>
     <h1>New Products</h1>
     <ul className="Home__products">
       {products.map((product) => (
         <li key={product.id}>{product.name}</li>
       ))}
     </ul>
   </div>
   ```

7. In the `App` component:

   - Render the `Home` component inside the `Container` component
   - Remove the `h1` element

### Product component

1. Copy the `src/assets` folder from the `start` folder to the `src` folder

2. Create a new folder in the `features` directory called `Product`

3. Create a file called `index.js` inside the newly created `Product` folder

4. In `index.js`, create a `Product` component that should :

   - Accept a property called `item`

   - Import an image dynamically by using:

     ```jsx
     const productImage = require(`../../assets/${item.imageURL}`);
     ```

   - Render the following code:

     ```jsx
     <li className="Products">
       <a href={`/update-product/${item.id}`}>
         <img className="Products__image" src={productImage} alt={item.name} />
         <div className="Products__name">{item.name}</div>
         <small className="Products__type">{item.type}</small>
       </a>
     </li>
     ```

### Home component

1. Replace the `li` element with the `Product` component

### PropTypes

1. Install the `prop-types` package

   ```bash
   npm install prop-types --save
   ```

2. Setup PropTypes in the `Container` and `Product` components
