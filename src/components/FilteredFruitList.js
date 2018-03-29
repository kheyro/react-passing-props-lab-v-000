import React from 'react';

const FilteredFruitList = (props) => {
  const list = !props.filter || props.filter === 'all' ? props.fruit : props.fruit.filter(i => i.fruit_type === props.filter);
  console.log(props.fruit)
  return (
    <ul className="fruit-list">
      {list.map((item, index) => <li key={index}>{item.char}</li>)}
    </ul>
  );
}

FilteredFruitList.defaultProps = {
  filter: '',
  fruit: []
}

export default FilteredFruitList;
