"use client";
import { useScroll, useTransform } from "framer-motion";
import { useRef,useEffect,useState } from "react";
import { pubsAni  } from "@/app/data";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/app/lib/utils";
import { DirectionAwareHover } from "./DirectionAwareHover";

export const ParallaxScroll = ({
  images,
  className,
  id,
}: {
  images:  string[];
  className?: string;
  id?: string;
}) => {
  const gridRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: gridRef, // remove this if your container is not fixed height
    offset: ["start start", "end start"], // remove this if your container is not fixed height
  });
  
  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const [myArray, setMyArray] = useState(['']);
  const [myArrayId, setMyArrayID] = useState(['']);




  const third = Math.ceil(images.length / 3);

  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);
  useEffect(() => {
   
      console.log(id)
    // Return cleanup function if needed
    return () => {
      // Cleanup logic here
    };
  }, [ pubsAni]);
  return (
    <div
      className={cn("h-[40rem] items-start overflow-y-auto w-full", className)}
      ref={gridRef}
    >
      <div
        className="grid grid-cols-1 lg:gap-x-[50%] md:gap-x-[30%] md:left-16 absolute lg:left-[15%]  md:grid-cols-2 lg:grid-cols-3 items-start  max-w-5xl mx-auto   px-10"
        ref={gridRef}
      >
        <div className="grid gap-y-5 ">
          {firstPart.map((el, idx) => (
            <motion.div
              style={{ y: translateFirst }} // Apply the translateY motion value here
              key={"grid-1" + idx}
            >
              {/* <Image
                src={el[0]}
                className=" md:h-80 md:w-full md:object-cover md:object-left-top md:rounded-lg md:gap-10 md:!m-0 md:!p-0"
                height="400"
                width="320"
                alt="thumbnail"
              /> */}
              <DirectionAwareHover
              className=" w-[400px]  h-[450px]"
              children={el}
              imageUrl={`/${el}.jpg`}
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-y-5 ">
          {secondPart.map((el, idx) => (
            <motion.div style={{ y: translateSecond }} key={"grid-2" + idx}>
             <DirectionAwareHover
              className=" w-[400px] h-[400px]"
              children={el}
              // imageClassName={`${id === '1' ? ' pl-[200px]' : ''} `}
              imageUrl={`/${el}.jpg`}
              
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-y-5 mt-[350px] lg:mt-[0px] ">
          {thirdPart.map((el, idx) => (
            <motion.div style={{ y: translateThird }} key={"grid-3" + idx}>
             <DirectionAwareHover
             className=" w-[400px]  h-[400px] "
              children={el}
              imageUrl={`/${el}.jpg`}
              />    
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
