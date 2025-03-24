"use client";

import { useState, Fragment } from "react";
import { Menu, Bell, X } from "lucide-react";
import { Dialog, Transition } from "@headlessui/react";

export default function Navbar({ onToggleSidebar }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="bg-white glass m-2 shadow-md p-4 flex items-center justify-between">
        <button onClick={onToggleSidebar} className="p-2 rounded-lg hover:bg-gray-200">
          <Menu size={24} />
        </button>

        <h1 className="text-xl font-semibold">Mini-Project</h1>

        {/* Notifications Button */}
        <button onClick={() => setIsOpen(true)} className="p-2 rounded-lg hover:bg-gray-200">
          <Bell size={24} />
        </button>
      </nav>

      {/* Notification Panel using Headless UI */}
      <Transition show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={() => setIsOpen(false)}>
          {/* 🔹 Translucent & Blurred Background */}
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0  bg-opacity-30 backdrop-blur-md transition-opacity" />
          </Transition.Child>

          {/* Panel */}
          <div className="fixed inset-y-0 right-0 flex max-w-xs w-full p-4">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-300"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-200"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <Dialog.Panel className="w-full max-w-lg bg-white shadow-lg rounded-l-lg p-4">
                {/* Panel Header */}
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold">Notifications</h2>
                  <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-gray-200 rounded-full">
                    <X size={24} />
                  </button>
                </div>

                {/* Notifications List */}
                <div className="mt-4 space-y-3">
                  <p className="text-gray-600">No new notifications</p>
                  {/* Example Notification */}
                  {/* <div className="p-2 bg-gray-100 rounded-lg">New update available</div> */}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
