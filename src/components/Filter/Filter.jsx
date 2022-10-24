import propTypes from 'prop-types';
import { Component } from 'react';

export const Filter = ({ filter, handleChange }) => (
  <label>
    Find contacts by Name
    <input
      type="text"
      name="filter"
      placeholder="Enter filter"
      value={filter}
      onChange={handleChange}
    />
  </label>
);

Filter.propTypes = {
  filter: propTypes.string.isRequired,
  handleChange: propTypes.func.isRequired,
};