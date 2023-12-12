import React from 'react';
import { IoEyeOutline } from "react-icons/io5";
import { GoPencil } from "react-icons/go";
import { RiDeleteBin6Line } from "react-icons/ri";
import { VscCopy } from "react-icons/vsc";
import { AiOutlineExport } from "react-icons/ai";
import Dropdown from '../components/Dropdown';
import NewButton from '../components/NewButton';
import ExportButton from '../components/ExportButton';

const JobOpportunities = () => {
  
  return (
    <div>
      {/* Page Title & Login */}
      <div className='topbar'>
	      <div className='title'>Job Opportunities</div>
        <div className='login-icon'>A</div>
      </div>

      {/* Filters */}
      <div className='filterbar'>
          <div>
            <Dropdown/>
            <Dropdown/>
            <Dropdown/>  
          </div>
          <div><ExportButton/></div>
      </div>

      {/* JO table section */}
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
              }}
            >
              <td>JOC Id</td>
              <td>Client Name</td>
              <td>Count</td>
              <td>Created By</td>
              <td>Assigned To</td>
              <td>Status</td>
              <td>Actions</td>
            </tr>
            {/* <br/> */}
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
              <td>JOC1</td>
              <td>ABC Corporation</td>
              <td>5</td>
              <td>Sadhasivam</td>
              <td>Arul Subramanian</td>
              <td>Active</td>
              <td>
                <IoEyeOutline />
                &nbsp;
                <GoPencil />
                &nbsp;
                <RiDeleteBin6Line />
                &nbsp;&nbsp;
                <VscCopy />
                &nbsp;&nbsp;
                <AiOutlineExport />
              </td>
            </tr>
            {/* <br /> */}
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
              <td>JOC2</td>
              <td>Precision Health Consultants</td>
              <td>9</td>
              <td>Arul Subramanian</td>
              <td>Arul Subramanian</td>
              <td>Submitted</td>
              <td>
                <IoEyeOutline />
                &nbsp;
                <GoPencil />
                &nbsp;
                <RiDeleteBin6Line />
                &nbsp;&nbsp;
                <VscCopy />
                &nbsp;&nbsp;
                <AiOutlineExport />
              </td>
            </tr>
            {/* <br /> */}
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
              <td>JOC3</td>
              <td>Pinnacle Innovations Labs</td>
              <td>4</td>
              <td>Muru Ganesan</td>
              <td>Arul Subramanian</td>
              <td>Saved</td>
              <td>
                <IoEyeOutline />
                &nbsp;
                <GoPencil />
                &nbsp;
                <RiDeleteBin6Line />
                &nbsp;&nbsp;
                <VscCopy />
                &nbsp;&nbsp;
                <AiOutlineExport />
              </td>
            </tr>
            {/* <br /> */}
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
              <td>JOC4</td>
              <td>Nexus Realty Partners</td>
              <td>7</td>
              <td>Sneha Balachander</td>
              <td>Arul Subramanian</td>
              <td>Active</td>
              <td>
                <IoEyeOutline />
                &nbsp;
                <GoPencil />
                &nbsp;
                <RiDeleteBin6Line />
                &nbsp;&nbsp;
                <VscCopy />
                &nbsp;&nbsp;
                <AiOutlineExport />
              </td>
            </tr>
            {/* <br /> */}
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
              <td>JOC5</td>
              <td>Precision Health Consultants</td>
              <td>9</td>
              <td>Arul Subramanian</td>
              <td>Arul Subramanian</td>
              <td>Submitted</td>
              <td>
                <IoEyeOutline />
                &nbsp;
                <GoPencil />
                &nbsp;
                <RiDeleteBin6Line />
                &nbsp;&nbsp;
                <VscCopy />
                &nbsp;&nbsp;
                <AiOutlineExport />
              </td>
            </tr>
            {/* <br /> */}
            <div style={{height:"10px"}}></div>
            
          </table>
      </div>
    </div>
  )
}

export default JobOpportunities