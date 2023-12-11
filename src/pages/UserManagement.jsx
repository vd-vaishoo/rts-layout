import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { Link,Outlet } from "react-router-dom";
import { IoEyeOutline } from "react-icons/io5";
import { GoPencil } from "react-icons/go";
import { RiDeleteBin6Line } from "react-icons/ri";
import { VscCopy } from "react-icons/vsc";
import { AiOutlineExport } from "react-icons/ai";

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

      {/* User - User Management */}
      <div className="table-container" style={{marginTop:"20px"}}>
          <div>
            <Link to="/jobopportunities/new">
            <button className="blue-btn">New</button>
            </Link>
            
          </div>
          <table style={{ paddingTop: "10px" }}>
            <tr
              style={{
                backgroundColor: "#2196F3",
                color: "white",
                textAlign: "center",
                height: "45px",
                borderRadius: "5px",
              }}
            >
              <td>Name</td>
              <td>Role</td>
              <td>Email</td>
              <td>Edit</td>
              <td>Delete</td>
            </tr>
            <br />

            <tr
              style={{
                backgroundColor: "white",
                color: "black",
                textAlign: "center",
                height: "40px",
                borderRadius: "5px",
              }}
            >
              <td>Arul Subramanian</td>
              <td>PDM,Admin</td>
              <td>arul.s@vudata.in</td>
              <td><GoPencil /></td>
              <td><RiDeleteBin6Line /></td>
              
            </tr>
            <br />
            <tr
              style={{
                backgroundColor: "white",
                color: "black",
                textAlign: "center",
                height: "40px",
                borderRadius: "5px",
              }}
            >
              
              <td>Sadhasivam</td>
              <td>HOD</td>
              <td>sadhasivam.s@vuedata.in</td>
              <td><GoPencil /></td>
              <td><RiDeleteBin6Line /></td>
            </tr>
           
            
          </table>
        </div>
    </div>
  )
}

export default UserManagement