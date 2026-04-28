import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar"; 

const RootLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar /> 
      <main className="flex-grow p-6">
        <Outlet /> 
      </main>

      <footer className="bg-gray-100 p-4 text-center">
        Footer
      </footer>
    </div>
  );
};

export default RootLayout;