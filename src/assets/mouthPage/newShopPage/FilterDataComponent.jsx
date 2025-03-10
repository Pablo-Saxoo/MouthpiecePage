// FilterDataComponent.js
import React, { useState } from 'react';
import CheckboxComponent from './CheckBoxComponent';
import data from '../../../../data';
import { createPortal } from 'react-dom';
import Product from '../Product';


const FilterDataComponent = () => {
  const filterOptions = [
    { value: 'Soprano', label: 'Soprano' },
    { value: 'Alto', label: 'Alto' },
    { value: 'Tenor', label: 'Tenor' },
    { value: 'Baritone', label: 'Baritone' },
  ];

  
  const [selectedFilters, setSelectedFilters] = useState(filterOptions.map((opt) => opt.value));
  const [filteredData, setFilteredData] = useState(data);



  const handleFilterChange = (selectedValues) => {
    setSelectedFilters(selectedValues);
  };

  const handleButtonClick = () => {
    const filtered = data.filter((item) => selectedFilters.includes(item.instr_type));
    setFilteredData(filtered);
  };


  function createProduct(params) {
    return (<Product 
    key = {params.id}
    name = {params.name}
    img_src = {params.img_src}
    price = {params.price}
    available = {params.available}
    />)
}

  return (
    <> 
      {/* Pass selectedFilters to CheckboxComponent */}
      <CheckboxComponent  options={filterOptions} selectedValues={selectedFilters} onChange={handleFilterChange} />


      {createPortal(
        
      filteredData.map(createProduct),
      
      document.getElementsByClassName("productsContainer")[0])}
      

      <button onClick={handleButtonClick}>Update Data</button>

      </>
  );
};

export default FilterDataComponent;