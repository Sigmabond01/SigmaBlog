// src/components/ui/Navbar.jsx
"use client";
import React, { useState } from "react";
import { Menu, MenuItem } from "./ui/navbar.jsx";
import { cn } from "../lib/utils.jsx";
import { useNavigate } from "react-router-dom";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center px-4 sm:px-6 md:px-10 font-mincho">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }) {
  const [active, setActive] = useState(null);
  const navigate = useNavigate();

  const handleNavigate = (scrollTo) => {
    navigate("/", { state: { scrollTo } });
  };

  return (
    <div
      className={cn(
        "absolute top-6 sm:top-10 inset-x-4 sm:inset-x-10 max-w-full sm:max-w-4xl mx-auto z-50",
        className
      )}
    >
      <Menu setActive={setActive} className="flex flex-wrap justify-center gap-4 sm:gap-6">
        <div onClick={() => navigate("/")}>
          <MenuItem setActive={setActive} active={active} item="Home" />
        </div>

        <div onClick={() => handleNavigate("about")}>
          <MenuItem setActive={setActive} active={active} item="About" />
        </div>

        <div onClick={() => navigate("/blogs")}>
          <MenuItem setActive={setActive} active={active} item="Blog" />
        </div>
        
        <div>
          <a href="https://linktr.ee/Sigmabond01" target="_blank" rel="noreferrer">
            <MenuItem setActive={setActive} active={active} item="Socials" />
          </a>
        </div>
      </Menu>
    </div>
  );
}
