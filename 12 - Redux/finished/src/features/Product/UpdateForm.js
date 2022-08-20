import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { updateProduct, deleteProduct } from './actions';

export default function UpdateForm() {
  const { id } = useParams();
  const products = useSelector((state) => state.products);
  const product = products.find((product) => product.id === Number(id));

  const [name, setName] = useState(product.name);
  const [type, setType] = useState(product.type);
  const [imageURL, setImageURL] = useState(product.imageURL);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(updateProduct({ id: product.id, name, type, imageURL }));
    navigate('/');
  };

  const onDelete = () => {
    dispatch(deleteProduct({ id: product.id }));
    navigate('/');
  };

  return (
    <>
      <h1>Update Product</h1>
      <form id="create-form" onSubmit={onSubmit}>
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input
            name="name"
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>

        <div className=" input-group">
          <label htmlFor="imageURL">Image URL</label>
          <input
            name="imageURL"
            type="text"
            id="imageURL"
            value={imageURL}
            onChange={(event) => setImageURL(event.target.value)}
          />
        </div>

        <div className=" input-group">
          <label htmlFor="type">Type</label>
          <input
            name="type"
            type="text"
            id="type"
            value={type}
            onChange={(event) => setType(event.target.value)}
          />
        </div>

        <button
          type="button"
          className="UpdateForm__delete-button"
          onClick={onDelete}
        >
          Delete product
        </button>
        <button type="submit">Update product</button>
      </form>
    </>
  );
}
