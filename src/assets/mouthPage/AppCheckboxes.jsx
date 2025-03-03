import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import data from '../../../data';

export default function ControlledCheckbox() {
  const [checked, setChecked] = React.useState(true);

  // const handleChange = (event) => {
  //   setChecked(event.target.checked);
  // };

  function handleChange(event) {
    let arr_mouth = []
    // if checked -> show only checked mouthpieces soo soprano checked shows only soprano
    if (checked === true){
      for (var i in data) {
        if (data[i].instr_type === "SOPR")  {arr_mouth.push(data[i])}
        console.log(arr_mouth);
      };
    };
    setChecked(event.target.checked);
  };

  return (
    <Checkbox
      checked={checked}
      onChange={handleChange}
    //   inputProps={{ 'aria-label': 'controlled' }}
    color='black'
    sx={{ '& .MuiSvgIcon-root': { fontSize: 35 } }}
    />
  );
}