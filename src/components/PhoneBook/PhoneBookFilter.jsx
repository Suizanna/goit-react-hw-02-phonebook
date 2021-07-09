import React from 'react';

const PhonebookFilter = ({ onSetFilter, filterValue }) => (
  <>
    <label>
      <p>Filter: </p>
      <input
        name="filter"
        onInput={onSetFilter}
        type="text"
        value={filterValue}
      />
    </label>
  </>
);

export default PhonebookFilter;
