import { NavLink } from "react-router-dom";
import logo from "@/assets/branding/logo.svg";

const Sidebar = () => (
  <aside className="w-64 bg-white shadow-md hidden md:block">
    <div className="p-6 border-b">
      <img src={logo} alt="StudyGenie" className="h-8" />
    </div>
    <nav className="p-4 space-y-3">
      <NavLink to="/dashboard">Dashboard</NavLink>
      <NavLink to="/planner">Planner</NavLink>
      <NavLink to="/notes">Notes</NavLink>
      <NavLink to="/analytics">Analytics</NavLink>
    </nav>
  </aside>
);

export default Sidebar;
