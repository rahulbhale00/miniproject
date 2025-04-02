"use client";

import { Menu} from "lucide-react";

export default function Navbar({ onToggleSidebar }) {

  return (
    <>
      {/* Navbar */}
      <nav className="bg-white glass m-2 shadow-md p-4 pr-6 flex items-center justify-between">
        <button onClick={onToggleSidebar} className="p-2 rounded-lg hover:bg-gray-200">
          <Menu size={24} />
        </button>
        <h1 className="text-xl font-semibold">Mini-Project</h1>
      </nav>
      
    </>
  );
}
