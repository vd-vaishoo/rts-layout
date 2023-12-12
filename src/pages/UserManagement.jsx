import React from 'react';
import { GoPencil } from "react-icons/go";
import { RiDeleteBin6Line } from "react-icons/ri";
import Dropdown from '../components/Dropdown';
import NewButton from '../components/NewButton';



const UserManagement = () => {
  return (
    <div>
      {/* Page Title & Login */}
      <div className='topbar'>
        <div className='title'>User</div>
        <div className='login-icon'>A</div>
      </div>
      <div className='submenu-title'>User Management</div>

      {/* Filters */}
      <div className='filterbar'>
        <div><Dropdown/></div>
      </div>

      {/* User - User Management */}
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