import React from 'react';
import { IoEyeOutline } from "react-icons/io5";
import { GoPencil } from "react-icons/go";
import Dropdown from '../components/Dropdown';
import NewButton from '../components/NewButton';


const ProjectName = () => {
  return (
    <div>
      {/* Page Title & Login */}
      <div className='topbar'>
        <div className='title'>Master Data</div>
        <div className='login-icon'>A</div>
      </div>
      <div className='submenu-title'>Project Name</div>

      {/* Filters */}
      <div className='filterbar'>
        <div><Dropdown/></div>
      </div>

      {/* MD-Project Name */}
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
              <td>Project Name</td>
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
              <td>ABC Project</td>
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
              <td>Nexus Project</td>
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
            
            
            
          </table>
        </div>
      
    </div>
  )
}

export default ProjectName