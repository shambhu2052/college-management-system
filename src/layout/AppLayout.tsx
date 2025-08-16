import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function AppLayout() {
  return (
    <div className="flex h-screen">
      <div className="w-[300px] bg-purple-800  shadow-2xs px-2">
        <Sidebar />
      </div>
      <div className="w-full h-full overflow-auto relative">
        <div className="w-full sticky top-0 z-50">
          <Navbar />
        </div>
        <div className="mx-4 mt-4 overflow-auto  ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
