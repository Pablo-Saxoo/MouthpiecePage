// CheckboxComponent.js
import React from 'react';
import { Checkbox, FormControlLabel } from '@mui/material';
import { useState, useEffect } from 'react';

const CheckboxComponent = ({ options, selectedValues, onChange }) => {

  const [checkedValues, setCheckedValues] = useState(selectedValues.length ? selectedValues : options.map(opt => opt.value));

  useEffect(() => {
    if (selectedValues.length === 0) {
      setCheckedValues([]); // Allow unchecking everything
    }
  }, [selectedValues]);


  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;

    let updatedSelectedValues = checked
      ? [...checkedValues, value]
      : checkedValues.filter((val) => val !== value);

    setCheckedValues(updatedSelectedValues);
    onChange(updatedSelectedValues);

  };

  return (
    <div >
      {options.map((option) => (
        <FormControlLabel
          className="checkIns"
          key={option.value}
          control={
            <Checkbox
            color='black'
              value={option.value}
              checked={checkedValues.includes(option.value)} // Ensure proper checked state
              onChange={handleCheckboxChange}
            />
          }
          label={option.label}
        />
      ))}
    </div>
  );
};

export default CheckboxComponent;
