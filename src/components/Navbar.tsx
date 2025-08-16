import { Button } from "antd";
import { useAuth } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const { logOut } = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    logOut();
    navigate("/");
  };
  return (
    <div
      style={{ boxShadow: "4px 1px 12px rgba(0,0,0,0.9)" }}
      className="px-4 "
    >
      <div className="flex items-center justify-between py-3 w-full bg-white ">
        <h2 className="text-xl font-semibold text-gray-400">
          School Management System
        </h2>
        <Button type="primary" onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </div>
  );
}
