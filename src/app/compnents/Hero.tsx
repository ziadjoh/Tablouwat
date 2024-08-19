'use client'
import { FaLocationArrow } from "react-icons/fa";
import MagicButton from "./MagicButton";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import Link from "next/link";
import { div } from "three/examples/jsm/nodes/Nodes.js";
import Image from "next/image";
import { Maher } from "./Maher";
import {Bien} from "@/app/compnents/Bien";
const Hero = () => {
  const handle =   async () => {
    window.location.href = 'https://ig.me/m/tab_louwat';
  };

 
  const wordo = `  Sublimez Votre Espace !`;
    return (
    <div className="pb-20 pt-[300px]">
           <div className="  top-[-1500px] left-[-1100px]  h-[2000px] w-[2000px] absolute lg:top-[-1450px] lg:left-[-370px]" 
      

   ></div>

      <div>
    
      </div>
      
      <div className="  flex justify-center relative  z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
        <Bien
        words={wordo}/>
        <Maher
        words={wordo}
        />

          

        </div>
      </div>
    </div>
  );
};

export default Hero;