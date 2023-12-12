import { NavLink } from "react-router-dom";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
import {
  BarChartOutlined,
  WorkOutlineOutlined,
  PlaylistAdd,
  PersonOutlineOutlined,
  Storage
} from '@mui/icons-material';

const routes = [
  {
    path: "/",
    name: "Dashboard",
    icon: <BarChartOutlined />
  },
  {
    path: "/jobopportunities",
    name: "Job Opportunities",
    icon: <WorkOutlineOutlined />,
  },
  {
    path: "/jobpositionrequest",
    name: "Job Position Request",
    icon: <PlaylistAdd />,
  },
  {
    path: "/user",
    name: "User",
    icon: <PersonOutlineOutlined />,
    subRoutes: [
      {
        path: "/user/usermanagement",
        name: "User Management ",
      },
      {
        path: "/user/rolemanagement",
        name: "Role Management",
      },
    ],
  },
  {
    path: "/masterdata",
    name: "Master Data",
    icon: <Storage />,
    exact: true,
    subRoutes: [
      {
        path: "/masterdata/clientname",
        name: "Client Name ",
      },
      {
        path: "/masterdata/projectname",
        name: "Project Name ",
      },
      {
        path: "/masterdata/primaryskills",
        name: "Primary Skills ",
      },
      {
        path: "/masterdata/techstack",
        name: "Tech Stack ",
      },
      {
        path: "/masterdata/worklocations",
        name: "Work Locations ",
      },
    ],
  },
  
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      opacity:0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      opacity:1,
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "200px" : "45px",
            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            {/* <div className="bars">
              <FaBars onClick={toggle} />
            </div> */}
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  <img src="assets/Vuedata.svg" alt="Vuedata Logo" width="200px" height="30px"/>
                  
                </motion.h1>
                
              )}
            </AnimatePresence>
            <br/>
            

            
          </div>
          <div style={{textAlign:"center",fontSize:"12px"}}>Job Requisition System</div>
          <div className="search">
            
          </div>
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }
              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>

          
        </motion.div>

        <main>{children}</main>
      </div>
    </>
  );
};

export default SideBar;




