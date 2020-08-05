## 09 - React Hooks

### Home component

1. Import the `useEffect` hook
2. Move the `getProducts` function and the calling function statement to be inside the `useEffect` hook:

   ```jsx
   useEffect(() => {
     async function getProducts() {
       const products = await axios.get(
         'https://run.mocky.io/v3/a091c6f3-dd51-43c8-973a-c7b6fd07a84a'
       );
       setProducts(products.data);
     }

     getProducts();
   }, []); // Put the empty array to make sure that the hook is executed only once
   ```
