"use client";

import { Menu } from "lucide-react";

export default function Navbar({ onToggleSidebar }) {
  return (
    <nav className="bg-white shadow-md p-4 flex items-center justify-between">
      <button onClick={onToggleSidebar} className="p-2 rounded-lg hover:bg-gray-200">
        <Menu size={24} />
      </button>
      <h1 className="text-xl font-semibold">Dashboard</h1>
    </nav>
  );
}
