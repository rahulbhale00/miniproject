import Sidebar from "@/components/Sidebar";
import SerialData from "@/components/SerialData";
import FlameChart from "@/components/flame_Sensor";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="flex">
      <div>
        <Sidebar />
      </div>
      <div className="w-full">
        <div>
          <Navbar />
        </div>
        <div>
          <FlameChart />
        </div>
      </div>
    </div>
  );
}
