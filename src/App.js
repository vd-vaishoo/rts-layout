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
import JoFormNew from './components/Forms/JoFormNew';


function App() {
  return (
    <Router>
    <SideBar>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/jobopportunities" element={<JobOpportunities />} />
        <Route path="/jobopportunities/new" element={<JoFormNew/>}/>
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



