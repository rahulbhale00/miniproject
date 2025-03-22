"use client";
import FlameChart from "@/components/flame_Sensor";
import RealTimeGasChart from "@/components/Gas_Sensor";
import RealTimeTemperatureChart from "@/components/RealTimeTemperatureChart";
import RealTimeVibrationChart from "@/components/RealTimeVibrationChart";
import InOutCounter from "@/components/InOutCounter";

export default function Home() {
  return (
    <div className="grid overflow-y-auto no-scrollbar grid-cols-5 gap-1 grid-rows-2 w-full h-[88vh] pb-2">
      <div className="col-span-2 row-span-1"><FlameChart/></div>
      <div className="col-span-2 row-span-1"><RealTimeGasChart /></div>
      
      <div className="col-span-1 row-span-2"><InOutCounter /></div>

      <div className="col-span-2 row-span-1"><RealTimeTemperatureChart /></div>
      <div className="col-span-2 row-span-1"><RealTimeVibrationChart /></div>
    </div>
  );
}
