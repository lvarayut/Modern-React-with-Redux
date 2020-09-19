## 07 - Rendering

<div align="center">
   <img  alt="Final result" src="https://user-images.githubusercontent.com/4281887/93013886-70a6af80-f5d6-11ea-8846-8847faee6fc1.png">
</div>

### AddForm component

1. In the browser, inspect the elements that the `AddForm` component renders
2. Replace the most outer `div` element with the Fragment

### App component

1. Replace the most outer `div` element with the Fragment

### Home component

1. Replace the most outer `div` element with the Fragment
2. Use Ternary to conditionally render the `ul` element as following:

   ```jsx
   {
     products.length > 0 ? (
       <ul className="Home__products">
         {products.map((product) => (
           <Product key={product.id} item={product} />
         ))}
       </ul>
     ) : (
       <div>Loading products....</div>
     )
   }
   ```
