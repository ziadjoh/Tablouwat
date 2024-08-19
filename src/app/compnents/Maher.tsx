"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/app/lib/utils";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
export const Maher = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  useEffect(() => {
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
  const wordo = `  Sublimez Votre Espace !`;

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
         <motion.span
             
              className={` ${  3 ? "text-purple" : "dark:text-white text-black"
                } opacity-0`}
            >
                         <div className=" bg-[url('png.png')] bg-no-repeat bg-cover top-[-1780px] left-[-1108px]  h-[2000px] w-[2000px]    absolute lg:top-[-1780px] lg:left-[-370px]" />
                 <p className=" font-Montserrat font-black flex justify-center mt-[-30px] items-center  "> <span className=" lg:text-[120px] md:text-[120px] text-[100px] text-black-100">T</span><span className=" lg:text-[80px] text-[60px] md:text-[80px] text-purple font-medium">ablouwa</span> <span className="lg:text-[120px] text-black-100 text-[100px]">T</span></p>
                 <TextGenerateEffect
            words={wordo}
            className="text-center font-Montserrat lg:text-[40px] font-medium lg:mt-[-60px] md:text-[40px] md:mt-[-60px] text-[30px] mt-[-40px] "
          />
     <p className=" lg:w-[1500px] mt-[25px]  text-[15px] md:text-[20px] break-lines lg:text-[30px] font-Montserrat pl-[20px] lg:flex lg:justify-center md:flex md:justify-center  font-normal text-black-100">Naviguez à travers notre vaste collection et laissez-vous inspirer par nos modèles variés.</p>

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