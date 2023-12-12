import React from 'react'
import { IoEyeOutline } from "react-icons/io5";
import { GoPencil } from "react-icons/go";
import Dropdown from '../components/Dropdown';
import NewButton from '../components/NewButton';

const WorkLocations = () => {
  return (
    <div>
      {/* Page Title & Login */}
      <div className='topbar'>
        <div className='title'>Master Data</div>
        <div className='login-icon'>A</div>
      </div>
      <div className='submenu-title'>Work Locations</div>

      {/* Filters */}
      <div className='filterbar'>
        <div><Dropdown/></div>
      </div>

      {/* MD - Work Locations */}
      <div className="table-container" style={{marginTop:"20px"}}>
          <div>
            <NewButton/>  
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
              <td>Work Locations</td>
              <td>Last Modified By</td>
              <td>Last Modified On</td>
              <td>Status</td>
              <td>Actions</td>
            </tr>
            <div style={{height:"10px"}}></div>

            <tr
              style={{
                backgroundColor: "white",
                color: "black",
                textAlign: "center",
                height: "40px",
                borderRadius: "5px",
              }}
            >
              <td>Chennai</td>
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
            <div style={{height:"10px"}}></div>
            <tr
              style={{
                backgroundColor: "white",
                color: "black",
                textAlign: "center",
                height: "40px",
                borderRadius: "5px",
              }}
            >
              <td>Bengaluru</td>
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
            <div style={{height:"10px"}}></div>
            <tr
              style={{
                backgroundColor: "white",
                color: "black",
                textAlign: "center",
                height: "40px",
                borderRadius: "5px",
              }}
            >
              <td>Kirkland</td>
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
            <div style={{height:"10px"}}></div>
            <tr
              style={{
                backgroundColor: "white",
                color: "black",
                textAlign: "center",
                height: "40px",
                borderRadius: "5px",
              }}
            >
              <td>Stdio City</td>
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
            <div style={{height:"10px"}}></div>
            
            <div style={{height:"10px"}}></div>
            
          </table>
        </div>
    </div>
  )
}

export default WorkLocations