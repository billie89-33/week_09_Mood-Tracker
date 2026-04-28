import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const RootLayout = () => {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <Navbar />
      <main className="flex justify-center items-center flex-grow p-6 md:p-10">
        <Outlet />
      </main>

      <footer className="text-center py-4 text-sm text-text-muted font-body">
        <span className="opacity-60"> Moody </span>
      </footer>
    </div>
  );
};

export default RootLayout;