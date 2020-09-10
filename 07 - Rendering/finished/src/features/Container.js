import React from 'react';
import PropTypes from 'prop-types';

function Container({ children }) {
  return <main>{children}</main>;
}

Container.propTypes = {
  children: PropTypes.node.isRequired
};

export default Container;
