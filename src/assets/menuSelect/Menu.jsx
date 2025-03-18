import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

export default function BasicSelect() {
  const [age, setAge] = React.useState("Menu");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box className="menu" sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Menu</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Menu"
          onChange={handleChange}
          IconComponent={MenuOpenIcon}
        >
          <MenuItem value={"Mouthpieces"}>
            <a href="./mouthpieces.html">Mouthpieces</a>
          </MenuItem>
          <MenuItem value={"Necks"}>Necks</MenuItem>
          <MenuItem value={"Fitting"}>Fitting</MenuItem>
          <MenuItem value={"About Us"}>About Us</MenuItem>

          <MenuItem value={"Sign In"}>Sign In</MenuItem>
          <MenuItem value={"Register"}>Register</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
