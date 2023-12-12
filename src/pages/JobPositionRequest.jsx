import React from 'react';
import {
  AccordionDetails,
  Typography,
  Accordion,
  AccordionSummary,
} from "@mui/material";
import { IoEyeOutline } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { GoPencil } from "react-icons/go";
import Dropdown from '../components/Dropdown';
import NewButton from '../components/NewButton';
import ExportButton from '../components/ExportButton';


const JobPositionRequest = () => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div>
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
            <Dropdown/>
          </div>
          <div><ExportButton/></div>
      </div>

      {/* JR content */}
      <div className="table-container" style={{marginTop:"20px"}}>
		    <div><NewButton/></div>
        <div style={{ maxHeight: "430px", width: "100%" }}>
          <table style={{ padding: "10px 0px", width: "100%"  }}>
            <tr
              style={{
                backgroundColor: "#2196F3",
                color: "white",
                textAlign: "center",
                height: "45px",
                borderRadius: "10px",
                width: "100vw",
              }}
            >
              <td>Job Details</td>
              <td>Status</td>
              <td>Actions</td>
            </tr>
          </table>

		   {/* Accordian-1 */}
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
              style={{ height: "25px" }}
            >
              <Typography
                style={{
                  backgroundColor: "#2196F3",
                  color: "white",
                  textAlign: "center",
                  height: "30px",
                  borderRadius: "5px",
                  width: "100%",
                  textAlign: "left",
                  paddingLeft: "10px",
				  margin:"0px"
                }}
              >
                <RiArrowDropDownLine
                  style={{ width: "30px", fontSize: "20px" }}
                />
                JOC1
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <table style={{ width: "100%", }}>
                  <tr
                    style={{
                      backgroundColor: "white",
                      color: "black",
                      textAlign: "center",
                      height: "40px",
                      borderRadius: "5px",
                    }}
                  >
                    <td>JPR1</td>
                    <td>Low</td>
                    <td>Junior Developer</td>
                    <td>Arul Subramanian</td>
                    <td>Active</td>
                    <td>
                      <IoEyeOutline />
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <GoPencil />
                    </td>
                  </tr>

                  <tr
                    style={{
                      backgroundColor: "white",
                      color: "black",
                      textAlign: "center",
                      height: "40px",
                      borderRadius: "5px",
                    }}
                  >
                    <td>JPR2</td>
                    <td>High</td>
                    <td>Data Analyst</td>
                    <td>Arul Subramanian</td>
                    <td>Submitted</td>
                    <td>
                      <IoEyeOutline />
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <GoPencil />
                    </td>
                  </tr>

                  <tr
                    style={{
                      backgroundColor: "white",
                      color: "black",
                      textAlign: "center",
                      height: "40px",
                      borderRadius: "5px",
                    }}
                  >
                    <td>JPR3</td>
                    <td>High</td>
                    <td>QA Tester</td>
                    <td>Arul Subramanian</td>
                    <td>Saved</td>
                    <td>
                      <IoEyeOutline />
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <GoPencil />
                    </td>
                  </tr>

                  
                </table>
              </Typography>
            </AccordionDetails>
          </Accordion>

		  {/* Accordian-2 */}
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              aria-controls="panel2d-content"
              id="panel2d-header"
            >
              <Typography
                style={{
                  backgroundColor: "#2196F3",
                  color: "white",
                  textAlign: "center",
                  height: "30px",
                  borderRadius: "5px",
                  width: "100%",
                  textAlign: "left",
                  paddingLeft: "10px",
                }}
              >
                <RiArrowDropDownLine
                  style={{ width: "30px", fontSize: "20px" }}
                />
                JOC2
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <table style={{ paddingTop: "10px", width: "100%" }}>
                  <tr
                    style={{
                      backgroundColor: "white",
                      color: "black",
                      textAlign: "center",
                      height: "40px",
                      borderRadius: "5px",
                    }}
                  >
                    <td>JPR1</td>
                    <td>Low</td>
                    <td>Junior Developer</td>
                    <td>Arul Subramanian</td>
                    <td>Active</td>
                    <td>
                      <IoEyeOutline />
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <GoPencil />
                    </td>
                  </tr>

                  <tr
                    style={{
                      backgroundColor: "white",
                      color: "black",
                      textAlign: "center",
                      height: "40px",
                      borderRadius: "5px",
                    }}
                  >
                    <td>JPR2</td>
                    <td>High</td>
                    <td>Data Analyst</td>
                    <td>Arul Subramanian</td>
                    <td>Submitted</td>
                    <td>
                      <IoEyeOutline />
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <GoPencil />
                    </td>
                  </tr>

                  <tr
                    style={{
                      backgroundColor: "white",
                      color: "black",
                      textAlign: "center",
                      height: "40px",
                      borderRadius: "5px",
                    }}
                  >
                    <td>JPR3</td>
                    <td>High</td>
                    <td>QA Tester</td>
                    <td>Arul Subramanian</td>
                    <td>Saved</td>
                    <td>
                      <IoEyeOutline />
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <GoPencil />
                    </td>
                  </tr>

                  
                </table>
              </Typography>
            </AccordionDetails>
          </Accordion>

		   {/* Accordian-3 */}
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <Typography
                style={{
                  backgroundColor: "#2196F3",
                  color: "white",
                  textAlign: "center",
                  height: "30px",
                  borderRadius: "5px",
                  width: "100%",
                  textAlign: "left",
                  paddingLeft: "10px",
                }}
              >
                <RiArrowDropDownLine
                  style={{ width: "30px", fontSize: "20px" }}
                />
                JOC3
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <table style={{ paddingTop: "10px", width: "100%" }}>
                  <tr
                    style={{
                      backgroundColor: "white",
                      color: "black",
                      textAlign: "center",
                      height: "40px",
                      borderRadius: "5px",
                    }}
                  >
                    <td>JPR1</td>
                    <td>Low</td>
                    <td>Junior Developer</td>
                    <td>Arul Subramanian</td>
                    <td>Active</td>
                    <td>
                      <IoEyeOutline />
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <GoPencil />
                    </td>
                  </tr>

                  <tr
                    style={{
                      backgroundColor: "white",
                      color: "black",
                      textAlign: "center",
                      height: "40px",
                      borderRadius: "5px",
                    }}
                  >
                    <td>JPR2</td>
                    <td>High</td>
                    <td>Data Analyst</td>
                    <td>Arul Subramanian</td>
                    <td>Submitted</td>
                    <td>
                      <IoEyeOutline />
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <GoPencil />
                    </td>
                  </tr>

                  <tr
                    style={{
                      backgroundColor: "white",
                      color: "black",
                      textAlign: "center",
                      height: "40px",
                      borderRadius: "5px",
                    }}
                  >
                    <td>JPR3</td>
                    <td>High</td>
                    <td>QA Tester</td>
                    <td>Arul Subramanian</td>
                    <td>Saved</td>
                    <td>
                      <IoEyeOutline />
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <GoPencil />
                    </td>
                  </tr>

                  
                </table>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
		</div>
    </div>
  )
}

export default JobPositionRequest