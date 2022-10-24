import propTypes from 'prop-types';

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