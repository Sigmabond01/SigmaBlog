// src/components/ui/Navbar.jsx
"use client";
import React, { useState } from "react";
import { Menu, MenuItem } from "./ui/navbar.jsx";
import { cn } from "../lib/utils.jsx";
import { useNavigate } from "react-router-dom";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center px-2 sm:px-4 md:px-6 lg:px-10 font-mincho">
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
        "absolute top-4 sm:top-6 md:top-8 lg:top-10 inset-x-2 sm:inset-x-4 md:inset-x-6 lg:inset-x-10 max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto z-50",
        className
      )}
    >
      <Menu setActive={setActive} className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6">
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