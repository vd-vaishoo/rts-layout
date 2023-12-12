import React from 'react'
import { IoEyeOutline } from "react-icons/io5";
import { GoPencil } from "react-icons/go";
import Dropdown from '../components/Dropdown';
import NewButton from '../components/NewButton';

const ClientName = () => {
  return (
    <div>
      {/* Page Title & Login */}
      <div className='topbar'>
        <div className='title'>Master Data</div>
        <div className='login-icon'>A</div>
      </div>
      <div className='submenu-title'>Client Name</div>

      {/* Filters */}
      <div className='filterbar'>
        <div><Dropdown/></div>
      </div>

      {/* MD- Client */}
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