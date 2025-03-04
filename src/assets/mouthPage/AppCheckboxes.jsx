import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';


export default function ControlledCheckbox(props) {
  const [checked, setChecked] = React.useState(true);

  // const handleChange = (event) => {
  //   setChecked(event.target.checked);
  // };

  function handleChange(){
    props.onChange();
  }

  return (
    <Checkbox
      checked={props.isChecked}
      onChange={handleChange}
    //   inputProps={{ 'aria-label': 'controlled' }}
    color='black'
    sx={{ '& .MuiSvgIcon-root': { fontSize: 35 } }}
    />
  );
}