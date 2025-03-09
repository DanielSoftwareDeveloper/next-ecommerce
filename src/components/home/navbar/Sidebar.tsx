"use client";

import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { navbarRoutes } from "./navbar.data";
import { IoMdMenu } from "react-icons/io";

function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)} className="flex items-center">
        <IoMdMenu size={35} className="cursor-pointer hover:opacity-80" />
      </button>

      <div
        onClick={() => setOpen(false)}
        className={`fixed top-0 left-0 w-full h-screen bg-zinc-800/50 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      ></div>

      <nav
        className={`fixed top-0 right-0 w-80 h-screen py-4 px-8 bg-slate-100 border-l border-zinc-400 transition-transform duration-300 transform ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end">
          <button onClick={() => setOpen(false)} className="mb-16">
            <IoClose size={30} className="cursor-pointer" />
          </button>
        </div>
        <ul className="flex flex-col space-y-6">
          {navbarRoutes.map((route) => (
            <li key={route.href} className="">
              <a href={route.href} className="">
                {route.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
export default Sidebar;
