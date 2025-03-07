// FilterDataComponent.js
import React, { useState } from 'react';
import CheckboxComponent from './CheckBoxComponent';
import data from '../../../../data';


const FilterDataComponent = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState([]);

  const filterOptions = [
    { value: 'Soprano', label: 'Soprano' },
    { value: 'Alto', label: 'Alto' },
    { value: 'Tenor', label: 'Tenor' },
    { value: 'Baritone', label: 'Baritone' },
  ];

  const handleFilterChange = (selectedValues) => {
    setSelectedFilters(selectedValues);
  };

  const handleButtonClick = () => {
    const filtered = data.filter((item) => selectedFilters.includes(item.instr_type));
    setFilteredData(filtered);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      {/* Pass selectedFilters to CheckboxComponent */}
      <CheckboxComponent options={filterOptions} selectedValues={selectedFilters} onChange={handleFilterChange} />

      <div style={{ width: '55%' }}>
        <h3>Filtered Data</h3>
        <ul>
          {filteredData.length > 0 ? (
            filteredData.map((item) => (
              <li key={item.id}>
                {item.name} (Instrument Type: {item.instr_type})
              </li>
            ))
          ) : (
            <li>No data available for the selected filters.</li>
          )}
        </ul>
      </div>

      {/* Button to trigger the update */}
      <div style={{ marginTop: '20px' }}>
        <button onClick={handleButtonClick}>Update Data</button>
      </div>
    </div>
  );
};

export default FilterDataComponent;