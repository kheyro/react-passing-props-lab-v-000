import React from 'react';

const Filter = (props) => {
    return (
      <select onChange={(e) => props.handleChange(e)} defaultValue='all'>
        <option value='all'>All</option>
        {props.filters.map(filter =>
          <option key={filter} value={filter}>{filter}</option>
        )}
      </select>
    );
}

Filter.defaultProps = {
  filters: [],
  handleChange: () => void(0)
}

export default Filter;
