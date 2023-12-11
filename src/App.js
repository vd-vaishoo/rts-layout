import './App.css';
import SideBar from "./components/Sidebar/SideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import JobOpportunities from './pages/JobOpportunities';
import JobPositionRequest from './pages/JobPositionRequest';
import User from './pages/User';
import UserManagement from './pages/UserManagement';
import RoleManagement from './pages/RoleManagement';
import MasterData from './pages/MasterData';
import ClientName from './pages/ClientName';
import ProjectName from './pages/ProjectName';
import PrimarySkills from './pages/PrimarySkills';
import TechStack from './pages/TechStack';
import WorkLocations from './pages/WorkLocations';


function App() {
  return (
    <Router>
    <SideBar>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/jobopportunities" element={<JobOpportunities />} />
        <Route path="/jobpositionrequest" element={<JobPositionRequest />} />
        <Route path="/user" element={<User />} />
        <Route path="/user/usermanagement" element={<UserManagement />} />
        <Route path="/user/rolemanagement" element={<RoleManagement />} />
        <Route path="/masterdata" element={<MasterData />} />
        <Route path="/masterdata/clientname" element={<ClientName />} />
        <Route path="/masterdata/projectname" element={<ProjectName/>} />
        <Route path="/masterdata/primaryskills" element={<PrimarySkills />} />
        <Route path="/masterdata/techstack" element={<TechStack />} />
        <Route path="/masterdata/worklocations" element={<WorkLocations />} />
        <Route path="*" element={<> not found</>} />
      </Routes>
    </SideBar>
  </Router>
  );
}

export default App;



// import './App.css';
// import SideBar from "./components/Sidebar/SideBar";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Dashboard from "./pages/Dashboard";
// import Users from "./pages/Users";
// import Messages from "./pages/Messages";
// import FileManager from "./pages/FileManager";
// import Analytics from "./pages/Analytics";
// import Order from "./pages/Order";
// import Saved from "./pages/Saved";
// import Setting from "./pages/Setting";

// function App() {
//   return (
//     <Router>
//     <SideBar>
//       <Routes>
//         <Route path="/" element={<Dashboard />} />
//         <Route path="/users" element={<Users />} />
//         <Route path="/messages" element={<Messages />} />
//         <Route path="/analytics" element={<Analytics />} />
//         <Route path="/file-manager" element={<FileManager />} />
//         <Route path="/order" element={<Order />} />
//         <Route path="/saved" element={<Saved />} />
//         <Route path="/settings" element={<Setting />} />

//         <Route path="*" element={<> not found</>} />
//       </Routes>
//     </SideBar>
//   </Router>
//   );
// }

// export default App;
