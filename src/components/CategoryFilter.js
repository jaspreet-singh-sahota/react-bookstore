import React from 'react';
import PropTypes from 'prop-types';
import categories from '../reducers/categoryData';

const CategoryFilter = ({ filterCategory }) => {
  const handleFilter = ({ target }) => {
    filterCategory(target.value);
  };

  return (
    <div>
      <span>CATEGORIES:</span>
      <select name="category" onChange={handleFilter}>
        <option value="All" key="All">
          All
        </option>
        {categories.map(category => (
          <option value={category} key={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

CategoryFilter.propTypes = {
  filterCategory: PropTypes.func.isRequired,
};

export default CategoryFilter;
