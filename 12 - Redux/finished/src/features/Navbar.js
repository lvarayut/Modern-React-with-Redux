import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Navbar({ className }) {
  return (
    <header className={className}>
      <Link to="/" className="brand">
        Trendie
      </Link>
      <Link to="/create-product">Create product</Link>
    </header>
  );
}

Navbar.propTypes = {
  className: PropTypes.string.isRequired
};

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
