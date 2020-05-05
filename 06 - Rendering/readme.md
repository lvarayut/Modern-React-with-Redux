## 06 - Rendering

### Rendering users

Given the following `users` array

```js
const users = [
  {
    id: 1,
    name: 'John',
    isActive: false
  },
  {
    id: 2,
    name: 'Jane',
    isActive: true
  }
];
```

**User component**

1. Create an User component
2. It should accept `user` as a property
3. It should render a `div` tag that contains "User's id is `<id>` and User's name is `<name>`
4. However, if the user is inactive, it should also have "(inactive)" at the end of the div content
