"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/app/lib/utils";

export const Bien = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    console.log(wordsArray);
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
         <motion.span
              className={` ${  3 ? "text-purple" : "dark:text-white text-black"
                } opacity-0`}
            >
                 <p className=" sm:w-[650px] font-Montserrat flex justify-center font-normal mt-[50px]"> <span className=" lg:text-[30px] md:text-[20px] text-[15px] text-black-100">Bienvenue à votre destination privilégiée <br /> <span className=" flex justify-center">pour des tableaux 
                 décoratifs</span> </span></p>
                 </motion.span>

      </motion.div>
      
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="my-4">
        <div className=" dark:text-white text-black leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};