import { useAuth } from "@/context/AuthContext";

const Navbar = () => {
  const { logout } = useAuth();
  return (
    <header className="bg-white shadow px-6 py-4 flex justify-between">
      <span className="font-semibold">StudyGenie</span>
      <button onClick={logout} className="text-red-600">Logout</button>
    </header>
  );
};

export default Navbar;
