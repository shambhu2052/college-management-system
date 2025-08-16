import { NavLink } from "react-router-dom";
import { AiFillDashboard } from "react-icons/ai";
import { PiStudentBold } from "react-icons/pi";
export default function Sidebar() {
  return (
    <div className="mt-5 space-y-3">
      <NavLink
        to="/app/dashboard"
        className={({ isActive }) =>
          isActive
            ? "bg-yellow-600 px-2 py-[6px] rounded-md flex gap-2 items-center text-white font-medium text-lg"
            : "bg-gray-400 px-2 py-[6px] rounded-md flex gap-2 items-center text-white font-medium text-lg"
        }
      >
        <span className="text-white">
          <AiFillDashboard size={25} />
        </span>{" "}
        Dashboard
      </NavLink>
      <NavLink
        to="/app/student"
        className={({ isActive }) =>
          isActive
            ? "bg-yellow-600 px-2 py-[6px] rounded-md flex gap-2 items-center text-white font-medium text-lg"
            : "bg-gray-400 px-2 py-[6px] rounded-md flex gap-2 items-center text-white font-medium text-lg"
        }
      >
        <span className="text-white">
          <PiStudentBold size={25} />
        </span>{" "}
        Student
      </NavLink>
    </div>
  );
}
