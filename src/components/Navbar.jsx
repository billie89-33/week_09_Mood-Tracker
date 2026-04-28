import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navClass = ({ isActive }) =>
    isActive
      ? "text-blue-600 font-bold border-b-2 border-blue-600 pb-1"
      : "text-gray-600 hover:text-blue-500 transition";

  return (
    <nav className="bg-amber-600 p-4 flex gap-8 justify-center ">
      <div className="flex gap-4 ">
        <NavLink to="/" className={navClass}>
          Home
        </NavLink>

        <NavLink to="/displaypage" className={navClass}>
          History
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
