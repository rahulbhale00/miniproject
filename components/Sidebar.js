"use client";

import Link from "next/link";
import { Home, Activity, Settings, BarChart } from "lucide-react";

export default function DashboardShell({ children }) {
  return (
    <div className="flex min-h-screen m-2">
      {/* Sidebar */}
      <aside className="w-70 bg-[rgb(250,250,250)] text-black p-5 flex flex-col min-h-screen border-r border-gray-300 shadow-md">
        {/* Logo and Project Name */}
        <div className=" flex items-center justify-center mb-6">
          <img src="/logo.png" alt="Logo" className="h-16 w-20 rounded-full" />
          <span className="text-lg font-semibold text-gray-800">
            Industrial Fault Monitoring System
          </span>
        </div>

        {/* Navigation Header */}
        <div className="text-sm font-medium text-gray-600 ml-3 mb-2">Navigation</div>

        {/* Navigation Links */}
        <nav className="flex flex-col space-y-2">
          <Link
            href="#"
            className="flex items-center space-x-3 p-3 rounded-lg bg-[rgb(244,244,245)] hover:bg-gray-300 transition"
          >
            <Home className="h-5 w-5" />
            <span>Dashboard</span>
          </Link>
          <Link
            href="#"
            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-300 transition"
          >
            <Activity className="h-5 w-5" />
            <span>Sensors</span>
          </Link>
          <Link
            href="#"
            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-300 transition"
          >
            <BarChart className="h-5 w-5" />
            <span>Analytics</span>
          </Link>
          <Link
            href="#"
            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-300 transition"
          >
            <Settings className="h-5 w-5" />
            <span>Settings</span>
          </Link>
        </nav>
      </aside>

  
    </div>
  );
}