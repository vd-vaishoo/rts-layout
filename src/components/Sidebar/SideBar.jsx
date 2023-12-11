import { NavLink } from "react-router-dom";
import { FaBars, FaHome, FaLock, FaMoneyBill, FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BiAnalyse, BiSearch } from "react-icons/bi";
import { BiCog } from "react-icons/bi";
import { AiFillHeart, AiTwotoneFileExclamation } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";

const routes = [
  {
    path: "/",
    name: "Dashboard",
    icon: <FaHome />,
  },
  {
    path: "/jobopportunities",
    name: "Job Opportunities",
    icon: <FaUser />,
  },
  {
    path: "/jobpositionrequest",
    name: "Job Position Request",
    icon: <MdMessage />,
  },
  {
    path: "/user",
    name: "User",
    icon: <FaUser />,
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
    icon: <BiCog />,
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
  const [isOpen, setIsOpen] = useState(false);
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
            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  <img src="https://www.vuedata.com/assets/vuedata%20light.png" width="200px" height="22px" style={{ paddingTop: "0px" }}/><br/><br/>
                  {/* <span style={{paddingLeft:"50px",fontSize:'10px',fontWeight:"lighter"}}>Job Requisiton System</span> */}
                </motion.h1>
              )}
            </AnimatePresence>

            
          </div>
          <div className="search">
            {/* <div className="search_icon">
              <BiSearch />
            </div> */}
            {/* <AnimatePresence>
              {isOpen && (
                <motion.input
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={inputAnimation}
                  type="text"
                  placeholder="Search"
                />
              )}
            </AnimatePresence> */}
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




// import { NavLink } from "react-router-dom";
// import { FaBars, FaHome, FaLock, FaMoneyBill, FaUser } from "react-icons/fa";
// import { MdMessage } from "react-icons/md";
// import { BiAnalyse, BiSearch } from "react-icons/bi";
// import { BiCog } from "react-icons/bi";
// import { AiFillHeart, AiTwotoneFileExclamation } from "react-icons/ai";
// import { BsCartCheck } from "react-icons/bs";
// import { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import SidebarMenu from "./SidebarMenu";

// const routes = [
//   {
//     path: "/",
//     name: "Dashboard",
//     icon: <FaHome />,
//   },
//   {
//     path: "/users",
//     name: "Users",
//     icon: <FaUser />,
//   },
//   {
//     path: "/messages",
//     name: "Messages",
//     icon: <MdMessage />,
//   },
//   {
//     path: "/analytics",
//     name: "Analytics",
//     icon: <BiAnalyse />,
//   },
//   {
//     path: "/file-manager",
//     name: "File Manager",
//     icon: <AiTwotoneFileExclamation />,
//     subRoutes: [
//       {
//         path: "/settings/profile",
//         name: "Profile ",
//         icon: <FaUser />,
//       },
//       {
//         path: "/settings/2fa",
//         name: "2FA",
//         icon: <FaLock />,
//       },
//       {
//         path: "/settings/billing",
//         name: "Billing",
//         icon: <FaMoneyBill />,
//       },
//     ],
//   },
//   {
//     path: "/order",
//     name: "Order",
//     icon: <BsCartCheck />,
//   },
//   {
//     path: "/settings",
//     name: "Settings",
//     icon: <BiCog />,
//     exact: true,
//     subRoutes: [
//       {
//         path: "/settings/profile",
//         name: "Profile ",
//         icon: <FaUser />,
//       },
//       {
//         path: "/settings/2fa",
//         name: "2FA",
//         icon: <FaLock />,
//       },
//       {
//         path: "/settings/billing",
//         name: "Billing",
//         icon: <FaMoneyBill />,
//       },
//     ],
//   },
//   {
//     path: "/saved",
//     name: "Saved",
//     icon: <AiFillHeart />,
//   },
// ];

// const SideBar = ({ children }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const toggle = () => setIsOpen(!isOpen);
//   const inputAnimation = {
//     hidden: {
//       width: 0,
//       padding: 0,
//       opacity:0,
//       transition: {
//         duration: 0.2,
//       },
//     },
//     show: {
//       width: "140px",
//       padding: "5px 15px",
//       opacity:1,
//       transition: {
//         duration: 0.2,
//       },
//     },
//   };

//   const showAnimation = {
//     hidden: {
//       width: 0,
//       opacity: 0,
//       transition: {
//         duration: 0.5,
//       },
//     },
//     show: {
//       opacity: 1,
//       width: "auto",
//       transition: {
//         duration: 0.5,
//       },
//     },
//   };

//   return (
//     <>
//       <div className="main-container">
//         <motion.div
//           animate={{
//             width: isOpen ? "200px" : "45px",

//             transition: {
//               duration: 0.5,
//               type: "spring",
//               damping: 10,
//             },
//           }}
//           className={`sidebar `}
//         >
//           <div className="top_section">
//           <div className="bars">
//               <FaBars onClick={toggle} />
//             </div>
//             <AnimatePresence>
//               {isOpen && (
//                 <motion.h1
//                   variants={showAnimation}
//                   initial="hidden"
//                   animate="show"
//                   exit="hidden"
//                   className="logo"
//                 >
//                   DoSomeCoding
//                 </motion.h1>
//               )}
//             </AnimatePresence>

            
//           </div>
//           <div className="search">
//             {/* <div className="search_icon">
//               <BiSearch />
//             </div> */}
//             {/* <AnimatePresence>
//               {isOpen && (
//                 <motion.input
//                   initial="hidden"
//                   animate="show"
//                   exit="hidden"
//                   variants={inputAnimation}
//                   type="text"
//                   placeholder="Search"
//                 />
//               )}
//             </AnimatePresence> */}
//           </div>
//           <section className="routes">
//             {routes.map((route, index) => {
//               if (route.subRoutes) {
//                 return (
//                   <SidebarMenu
//                     setIsOpen={setIsOpen}
//                     route={route}
//                     showAnimation={showAnimation}
//                     isOpen={isOpen}
//                   />
//                 );
//               }

//               return (
//                 <NavLink
//                   to={route.path}
//                   key={index}
//                   className="link"
//                   activeClassName="active"
//                 >
//                   <div className="icon">{route.icon}</div>
//                   <AnimatePresence>
//                     {isOpen && (
//                       <motion.div
//                         variants={showAnimation}
//                         initial="hidden"
//                         animate="show"
//                         exit="hidden"
//                         className="link_text"
//                       >
//                         {route.name}
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </NavLink>
//               );
//             })}
//           </section>
//         </motion.div>

//         <main>{children}</main>
//       </div>
//     </>
//   );
// };

// export default SideBar;