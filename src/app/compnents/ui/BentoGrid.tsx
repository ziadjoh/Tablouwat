'use client'
import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import { motion } from "framer-motion";


// Also install this npm i --save-dev @types/react-lottie

import { cn } from "@/app/lib/utils";




export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(!isOpen);
    console.log(isOpen)
  };
  const closePopup = () => {
    setIsOpen(false);
  };
  return (
    <div
      className={cn(
        // change gap-4 to gap-8, change grid-cols-3 to grid-cols-5, remove md:auto-rows-[18rem], add responsive code
        "grid     grid-cols-1  lg:mr-0 md:grid-cols-2 lg:col-span-1   gap-2  lg:gap-y-8   md:gap-x-44 mx-auto",
        className
      )}
      // onClick={closePopup}
    >
      {children}
         {isOpen && (
              <div className=" bg-black-200 border-2 z-50 border-red-700">
                {/* Popup content */}
                <button onClick={closePopup}>Close</button>
              </div>
            )}
    </div>
  );
};


