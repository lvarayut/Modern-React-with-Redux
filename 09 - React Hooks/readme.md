## 09 - React Hooks

<div align="center">
   <img  alt="Final result" src="https://user-images.githubusercontent.com/4281887/93013658-ad71a700-f5d4-11ea-9dcf-ffa388e830b6.png">
</div>

### Home component

1. Import the `useEffect` hook
2. Move the `getProducts` function and the calling function statement to be inside the `useEffect` hook:

   ```jsx
   useEffect(() => {
     async function getProducts() {
       const products = await axios.get(
         'https://apimocha.com/react-redux-class/products'
       );
       setProducts(products.data);
     }

     getProducts();
   }, []); // Put the empty array to make sure that the hook is executed only once
   ```
