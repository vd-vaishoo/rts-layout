import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";


const Dropdown = () => {
  return (
	<><FormControl
	className="mui-inputbox"
	sx={{ m: 1, minWidth: 100, height: 32, fontSize: 14 }}
	size="small"
  >
	<InputLabel id="demo-select-small-label">Month</InputLabel>
	<Select
	  labelId="demo-select-small-label"
	  id="demo-select-small"
	  label="Month"
	  sx={{
		boxShadow: "none",
		".MuiOutlinedInput-notchedOutline": { border: 0 },
		"&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
		  {
			border: 0,
		  },
		"&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
		  {
			border: 0,
		  },
	  }}
	>
	  {/* <MenuItem value="">
	  <em>None</em>
	</MenuItem> */}
	  <MenuItem value={10}>Month</MenuItem>
	  <MenuItem value={20}>Week</MenuItem>
	  <MenuItem value={30}>Custom</MenuItem>
	</Select>
  </FormControl></>
  )
}

export default Dropdown