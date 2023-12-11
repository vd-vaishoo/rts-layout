import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";


const UserManagement = () => {
  return (
    <div>
      <div className='topbar'>
        <div className='title'>User</div>
        <div><img src="../assets/login-logo.png" width="60px" height="50px"/></div>
      </div>
      <div className='submenu-title'>User Management</div>
      {/* Filters */}
      <div className='filterbar'>
      <div>
            <FormControl
              className="mui-inputbox"
              sx={{ m: 1, minWidth: 140 }}
              size="small"
            >
              <InputLabel id="demo-select-small-label">Month</InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                label="Month"
              >
                {/* <MenuItem value="">
                <em>None</em>
              </MenuItem> */}
                <MenuItem value={10}>Month</MenuItem>
                <MenuItem value={20}>Week</MenuItem>
                <MenuItem value={30}>Custom</MenuItem>
              </Select>
            </FormControl>
          </div>
      </div>
    </div>
  )
}

export default UserManagement