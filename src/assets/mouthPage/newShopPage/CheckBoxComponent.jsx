// CheckboxComponent.js
import React from 'react';
import { Checkbox, FormControlLabel } from '@mui/material';

const CheckboxComponent = ({ options, selectedValues, onChange }) => {
  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;

    let updatedSelectedValues = [...selectedValues];

    if (checked) {
      updatedSelectedValues.push(value);
    } else {
      updatedSelectedValues = updatedSelectedValues.filter((val) => val !== value);
    }

    onChange(updatedSelectedValues); // Notify parent component of the change
  };

  return (
    <div>
      {options.map((option) => (
        <FormControlLabel
          key={option.value}
          control={
            <Checkbox
              value={option.value}
              checked={selectedValues.includes(option.value)} // Ensure proper checked state
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
