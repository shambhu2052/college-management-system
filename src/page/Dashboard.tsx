import Card from "../components/form/dashboard/Card";
import { PiStudent } from "react-icons/pi";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { GoBook } from "react-icons/go";
import AreaCharts from "../components/form/dashboard/AreaCharts";
export default function Dashboard() {
  return (
    <div className="space-y-5 ">
      <h2 className="text-3xl font-semibold">Dashboard</h2>
      <div className="flex gap-9 flex-wrap">
        <Card title="Total Student" icon={<PiStudent size={40} />} count={10} />
        <Card
          title="Total Staff"
          icon={<LiaChalkboardTeacherSolid size={40} />}
          count={50}
        />
        <Card title="Total Book" icon={<GoBook size={40} />} count={60} />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div>
          <AreaCharts />
        </div>
      </div>
    </div>
  );
}
