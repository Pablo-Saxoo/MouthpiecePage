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
        // { value: 'Clarinete', label: 'Clarinete' },
    ];


    const handleFilterChange = (selectedValues) => {
        setSelectedFilters(selectedValues); // Update selected filters
      };
    
      // This function is triggered when the user clicks the 'Update Data' button
      const handleButtonClick = () => {
        // Filter the data based on selected filter values (instr_type)
        const filtered = data.filter((item) =>
          selectedFilters.length === 0 || selectedFilters.includes(item.instr_type)
        );
    
        setFilteredData(filtered); // Update filtered data state
      };
    
      return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* Section for checkboxes */}
          <div style={{ width: '40%' }}>
            <h3>Filters</h3>
            <CheckboxComponent options={filterOptions} onChange={handleFilterChange} />
          </div>
    
          {/* Section for filtered data */}
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
