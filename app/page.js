"use client";
import FlameChart from "@/components/flame_Sensor";
import RealTimeGasChart from "@/components/Gas_Sensor";
import RealTimeTemperatureChart from "@/components/RealTimeTemperatureChart";
import RealTimeVibrationChart from "@/components/RealTimeVibrationChart";
import InOutCounter from "@/components/InOutCounter";

export default function Home() {
  return (
    <div className="flex min-h-screen overflow-y-scroll no-scrollbar w-[100%]">
      <div className=" w-[60%] flex flex-col gap-3">
        <FlameChart/>
        <RealTimeGasChart />
        <RealTimeTemperatureChart />
        <RealTimeVibrationChart />
      </div>
      <div className="w-[40%] h-[87vh]">
        <InOutCounter />
      </div>
    </div>
  );
}
