"use client";
import React from "react";
import { motion } from "motion/react";



const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 200,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative ">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-white font-bold dark:hover:text-yellow-300">
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}>
          {active === item && (
            <div
              className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
                <motion.div
                  // layout ensures smooth animation
                  layout
                  className="w-max h-full p-4">
                  {children}
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className="relative font-ccultimatum border-2 border-blue-600/50 bg-gray-500 bg-clip-padding backdrop-filter  backdrop-blur-md bg-opacity-10 backdrop-saturate-100 backdrop-contrast-100 shadow-lg shadow-blue-500/50 px-6 py-3 rounded-full"
    >


        <div className="flex items-center justify-center space-x-14">
          {children}
        </div>
    </nav>
  );
};

