import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

export default function BasicSelect() {
  const [age, setAge] = React.useState("");

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
          <MenuItem value={10}>Mouthpieces</MenuItem>
          <MenuItem value={20}>Necks</MenuItem>
          <MenuItem value={30}>Fitting</MenuItem>
          <MenuItem value={30}>About Us</MenuItem>

          <MenuItem value={30}>Sign In</MenuItem>
          <MenuItem value={30}>Register</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
