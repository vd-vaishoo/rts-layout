import React from 'react';
import { GoPencil } from "react-icons/go";
import { RiDeleteBin6Line } from "react-icons/ri";
import Dropdown from '../components/Dropdown';
import NewButton from '../components/NewButton';



const RoleManagement = () => {
  return (
    <div>
      {/* Page Title & Login */}
      <div className='topbar'>
        <div className='title'>User</div>
        <div className='login-icon'>A</div>
      </div>
      <div className='submenu-title'>Role Management</div>
      
      {/* Filters */}
      <div className='filterbar'>
           <div><Dropdown/></div>
      </div>

      {/* User - Role Management */}
      <div className="table-container" style={{marginTop:"20px"}}>
          <div><NewButton/></div>
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
              <td>Role</td>
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
              <td>PDM</td>
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
              <td>HOD</td>
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
              <td>Management</td>
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
              <td>HR</td>
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
              <td>Admin</td>
              <td><GoPencil /></td>
              <td><RiDeleteBin6Line /></td>
            </tr>
            <br />
            
            
            
            
          </table>
      </div>

    </div>
  )
}

export default RoleManagement