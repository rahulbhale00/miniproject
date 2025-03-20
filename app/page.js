"use client";


import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import FlameChart from "@/components/flame_Sensor";
import Navbar from "@/components/Navbar";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex">
      
        <div className="p-4">
          <FlameChart />
        </div>
    </div>
  );
}
