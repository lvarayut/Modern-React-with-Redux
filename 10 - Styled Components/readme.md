## 10 - Styled Components

<div align="center">
   <img  alt="Final result" src="https://user-images.githubusercontent.com/4281887/93013658-ad71a700-f5d4-11ea-9dcf-ffa388e830b6.png">
</div>

### Prerequisite

1. Install the `styled-components` package:

   ```bash
   npm install styled-components --save
   ```

### Moving CSS

1. In the `index.css` file:

   - Move styles that start with `header` to the `Navbar` component as following:

     ```jsx
     export default styled(Navbar)`
       height: 48px;
       width: 100%;
       display: flex;
       align-items: center;
       justify-content: space-between;
       background-color: #ffffff;
       border-bottom: 1px solid #dee2e6;
       box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);

       padding: 2rem;
       position: fixed;
       z-index: 100;

       .brand {
         font-weight: bold;
         font-size: 1.5rem;
       }
     `;
     ```

   - Move styles that start with `main` to the `Container` component as following:

     ```jsx
     export default styled(Container)`
       max-width: 1200px;
       margin: 0 auto;
       padding: 4rem 0;
     `;
     ```

   - Move styles that start with `.Home` to the `Home` component as following:

     ```jsx
     export default styled(Home)`
       .Home__products {
         display: flex;
         flex-wrap: wrap;

         list-style-type: none;
         padding: 0;
         margin: 0 -12px;
       }
     `;
     ```

   - Move styles that start with `.Products` to the `Product` component as following:

     ```jsx
     export default styled(Product)`
       padding-right: 12px;
       padding-bottom: 36px;
       padding-left: 12px;
       width: 33%;
       position: relative;

       .Products__name {
         color: #333;

         text-overflow: ellipsis;
         overflow: hidden;
         white-space: nowrap;
         width: 100%;
         display: block;
       }

       .Products__type {
         color: #767676;
       }

       .Products__image {
         width: 100%;
         height: 200px;
         object-fit: cover;
         border-radius: 8px;
       }
     `;
     ```

2. Use the `prop-types` package to verify the added `className` property in all the components

### Global styles

1. Create a new component called `GlobalStyle` in the `features` folder

2. Move the rest of styles in the `index.css` to the `GlobalStyle` component:

   ```jsx
   import { createGlobalStyle } from 'styled-components';

   const GlobalStyle = createGlobalStyle`
       * {
         box-sizing: border-box;
       }
       ...
     `;

   export default GlobalStyle;
   ```

3. Render the component in the `App` component

4. Completely remove the `index.css` file
