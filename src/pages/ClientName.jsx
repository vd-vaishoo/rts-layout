import React from 'react'
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { Link,Outlet } from "react-router-dom";
import { IoEyeOutline } from "react-icons/io5";
import { GoPencil } from "react-icons/go";
import { RiDeleteBin6Line } from "react-icons/ri";
import { VscCopy } from "react-icons/vsc";
import { AiOutlineExport } from "react-icons/ai";

const ClientName = () => {
  return (
    <div>
      <div className='topbar'>
        <div className='title'>Master Data</div>
        <div><img src="../assets/login-logo.png" width="60px" height="50px"/></div>
      </div>
      <div className='submenu-title'>Client Name</div>

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

      {/* MD- Client */}
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
              <td>Client Name</td>
              <td>Last Modified By</td>
              <td>Last Modified On</td>
              <td>Status</td>
              <td>Actions</td>
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
              <td>ABC Corporation</td>
              <td>Admin.RTS@VueData.in</td>
              <td>01-10-2023</td>
              <td>Not Active</td>
              <td>
                <IoEyeOutline />
                &nbsp;
                <GoPencil />
                &nbsp;
                
              </td>
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
              <td>Precision Health Consultants</td>
              <td>Admin.RTS@VueData.in</td>
              <td>01-10-2023</td>
              <td>Not Active</td>
              <td>
                <IoEyeOutline />
                &nbsp;
                <GoPencil />
                &nbsp;
                
              </td>
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
              <td>Pinnacle Innovations Labs</td>
              <td>Admin.RTS@VueData.in</td>
              <td>01-10-2023</td>
              <td>Not Active</td>
              <td>
                <IoEyeOutline />
                &nbsp;
                <GoPencil />
                &nbsp;
                
              </td>
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
              <td>Nexus Realty Partners</td>
              <td>Admin.RTS@VueData.in</td>
              <td>01-10-2023</td>
              <td>Not Active</td>
              <td>
                <IoEyeOutline />
                &nbsp;
                <GoPencil />
                &nbsp;
                
              </td>
            </tr>
            <br />
            
            <br />
            
          </table>
        </div>
    </div>
  )
}

export default ClientName