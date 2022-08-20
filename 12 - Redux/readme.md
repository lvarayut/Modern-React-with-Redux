## 12 - Redux

<div align="center">
   <img  alt="Final result" src="https://user-images.githubusercontent.com/4281887/93014226-849fe080-f5d9-11ea-919e-0d32f971b10d.png">
</div>

### Installing React Developer Tools

1. Access [Redux Developer Tools for Chrome](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)
2. Install the extension

### Prerequisite

1. Install the `react-redux` and `@reduxjs/toolkit` packages:

   ```bash
   npm install react-redux @reduxjs/toolkit --save
   ```

### Setting up Redux

1. Create a `store.js` inside the `app` folder:

   ```jsx
   import { configureStore } from '@reduxjs/toolkit';

   export default configureStore({
     reducer: {}
   });
   ```

2. In the `index.js`, setup the Provider component:

   ```jsx
   <Provider store={store}>
     <BrowserRouter>
       <App />
     </BrowserRouter>
   </Provider>
   ```

> Note that you will get `Store does not have a valid reducer...` error. No worries about it for now, it will be solved in the sections below

### Creating actions

1. In the `Product` folder, create a file called `actions.js` that contains 4 following actions:

   ```jsx
   import { createAction } from '@reduxjs/toolkit';

   export const fetchProducts = createAction('FETCH_PRODUCTS');
   export const addProduct = createAction('ADD_PRODUCT');
   export const updateProduct = createAction('UPDATE_PRODUCT');
   export const deleteProduct = createAction('DELETE_PRODUCT');
   ```

### Creating the fetchProducts reducer

1. In the `Product` folder, create a file called `reducers.js` containing the following code:

   ```jsx
   import { createReducer } from '@reduxjs/toolkit';
   import { fetchProducts } from './actions';

   let currentProductId = 9;

   export default createReducer([], {
     [fetchProducts]: (state, action) => {
       return action.payload;
     }
   });
   ```

2. In the `store.js` file, add the created reducers to the `reducer` object and name it `products`:

   ```jsx
   reducer: {
     products: productReducers;
   }
   ```

### Using the Redux state and dispatching the getProducts action

1. In the `App` component:

   - Use the Redux state and completely remove the local one:

     ```diff
     + import { useSelector, useDispatch } from 'react-redux';
     ...
     - const [products, setProducts] = useState([]);
     + const products = useSelector((state) => state.products);
     ```

   - In the `useEffect` hook, dispatch the `fetchProducts` action:

     ```diff
     + import { fetchProducts } from './features/Product/actions';
     ...
     + const dispatch = useDispatch();
     useEffect(() => {
       async function getProducts() {
         const products = await axios.get(
           'https://run.mocky.io/v3/a091c6f3-dd51-43c8-973a-c7b6fd07a84a'
         );
     -   setProducts(products.data);
     +   dispatch(fetchProducts(products.data));
       }

       getProducts();
     }, []);
     ```

### Creating a new product

1. In the `reducers.js`, add a new reducer for creating a new product:

   ```jsx
   [addProduct]: (state, action) => {
     state.push({ id: ++currentProductId, ...action.payload });
   }
   ```

2. In the `AppForm` component:

   - Remove the `addProduct` property
   - Import the `addProduct` action
   - Dispatch the `addProduct` action by passing a product object as a payload
   - Redirect the page to the `/` page

   ```jsx
   import { useDispatch } from 'react-redux';
   import { useNavigate } from 'react-router-dom';
   ...
   const dispatch = useDispatch();
   const navigate = useNavigate();

   function onSubmit(event) {
     event.preventDefault();
     dispatch(addProduct({ name, type, imageURL }));
     navigate('/');
   }
   ```

### Updating a product

1. In the `reducers.js`, add a new reducer for updating a product:

   ```jsx
   [updateProduct]: (state, action) => {
    const productIndex = state.findIndex(
      (product) => product.id === action.payload.id
    );
    state[productIndex] = action.payload;
   },
   ```

2. In the `UpdateForm` component:

   - Get the current product from the Redux store by using the `id` parameter:

     ```jsx
     import { useSelector } from 'react-redux';
     ...
     const { id } = useParams();
     const products = useSelector((state) => state.products);
     const product = products.find((product) => product.id === Number(id));
     ```

   - Set the initial values of the input fields to the `product` object

     ```jsx
     const [name, setName] = useState(product.name);
     const [type, setType] = useState(product.type);
     const [imageURL, setImageURL] = useState(product.imageURL);
     ```

   - Create an `onSubmit` function and pass it to the `onSubmit` event of the `form` element:

     ```jsx
     const dispatch = useDispatch();
     const navigate = useNavigate();

     const onSubmit = (event) => {
       event.preventDefault();
       dispatch(updateProduct({ id: product.id, name, type, imageURL }));
       navigate('/');
     };
     ```

### Deleting a product

1. In the `reducers.js`, add a new reducer for deleting a product:

   ```jsx
   [deleteProduct]: (state, action) => {
    const productIndex = state.findIndex(
      (product) => product.id === action.payload.id
    );
    state.splice(productIndex, 1);
   }
   ```

2. In the `UpdateForm` component, create an `onDelete` function and pass it to the `onClick` event of the delete button element:

   ```jsx
   const onDelete = () => {
     dispatch(deleteProduct({ id: product.id }));
     history.push('/');
   };
   ```
