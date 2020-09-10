## 08 - HTTP Request

<div align="center">
   <img  alt="Final result" src="https://user-images.githubusercontent.com/4281887/93014019-9e402880-f5d7-11ea-9aca-d71a63aea2a9.png">
</div>

### Prerequisite

1. Install the `axios` package:

   ```bash
   npm install axios --save
   ```

### Home component

1. Remove the `../app/data` import statement
2. Set the default of the `products` state to an empty array
3. Import the `axios` package
4. Create a `getProducts` function that fetches the products data from this [API](https://run.mocky.io/v3/a091c6f3-dd51-43c8-973a-c7b6fd07a84a), and set the products state to be the products data retrieved from the API:

   ```jsx
   async function getProducts() {
     const products = await axios.get(
       'https://run.mocky.io/v3/a091c6f3-dd51-43c8-973a-c7b6fd07a84a'
     );
     setProducts(products.data);
   }

   getProducts();
   ```

   > Notice the problem of calling API infinitely since the the component keeps re-rendering and re-fetching the products data
