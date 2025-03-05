// CheckboxComponent.js
import React from 'react';
import { Checkbox, FormControlLabel } from '@mui/material';

const CheckboxComponent = ({ options, onChange }) => {
  // This function handles the checkbox change events
  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;

    let updatedSelectedValues = [...options];
    
    if (checked) {
      updatedSelectedValues = [...updatedSelectedValues, value];
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
