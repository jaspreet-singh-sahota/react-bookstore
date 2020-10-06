import React from 'react';
import PropTypes from 'prop-types';
import categories from '../reducers/categoryData';

const CategoryFilter = ({ filterCategory }) => {
  const handleFilter = ({ target }) => {
    filterCategory(target.value);
  };

  return (
    <div className="categories-filter">
      <div className="span-section">
        <span>CATEGORIES FILTER:</span>
      </div>
      <select className="select-section" name="category" onChange={handleFilter}>
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
