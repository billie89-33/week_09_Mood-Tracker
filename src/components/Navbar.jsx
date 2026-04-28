import { NavLink } from "react-router-dom";

const Navbar = () => {
  const baseClass =
    "relative px-5 py-2 rounded-full text-sm font-semibold tracking-wide transition-all duration-300";

  const navClass = ({ isActive }) =>
    isActive
      ? `${baseClass} bg-white/80 text-primary-600 shadow-md shadow-primary-200/40`
      : `${baseClass} text-text-secondary hover:text-primary-500 hover:bg-white/40`;

  return (
    <nav className="flex justify-center py-5 px-4">
      <div className="glass-card flex gap-2 p-1.5 rounded-full">
        <div className="flex items-center gap-1.5 px-3">
          <div className="w-2 h-2 rounded-full bg-accent-500 ai-badge-glow" />
          <span className="text-xs font-bold text-accent-500 font-display tracking-wider hidden sm:inline">
            Moody
          </span>
        </div>

        <NavLink to="/" className={navClass}>
          🏠 Home
        </NavLink>

        <NavLink to="/displaypage" className={navClass}>
          📋 History
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
