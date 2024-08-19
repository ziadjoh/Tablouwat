'use client'
import { gridItems, pubsCom, pubsDeen, pubsMod, pubsPos } from "@/app/data";
import { useState } from "react";
import { BentoGrid } from "@/app/compnents/ui/BentoGrid";
import { IoCopyOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import Lottie from "react-lottie";
import { TbHandClick } from "react-icons/tb";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/app/lib/utils";
import { BackgroundGradientAnimation } from "@/app/compnents/ui/Gradientbg";
import animationData from "@/app/data/confetti.json";
import MagicButton from "@/app/compnents/MagicButton";
import { ParallaxScroll } from "./ui/ParllaxScroll";
import { string } from "three/examples/jsm/nodes/Nodes.js";
import { pubsAni , pubsIll } from "@/app/data";

const Grid = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(''); // State for selected category
  const [image, setImage] = useState(['']);
  const [my, setMy] = useState('');



  let a :string;
 
  const handleCopy = () => {
    const text = "+213774900845";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };
  const handle =   async () => {
    window.location.href = 'https://ig.me/m/tab_louwat';
  };
  const go =  async () => {
      window.location.href = 'https://www.instagram.com/tab_louwat/';
  };
  const openPopup = (category: string, id:number) => {
    console.log(id)
    
  if(id=== 7){
      handle();
  }
    switch (category) {
      case 'Anime ':
        setImage(pubsAni);
        setIsOpen(!isOpen); 

        break;
      case 'Illustration':
        setImage(pubsIll);
        setIsOpen(!isOpen); 
        break;
      case 'Posters':
        setIsOpen(!isOpen); 
        setImage(pubsPos);
        break;
      case 'Modèle Minimaliste':
        setImage(pubsMod);
        setIsOpen(!isOpen); 
        break;
      case 'Comics':
        setImage(pubsCom);
        setIsOpen(!isOpen); 
        break;
      case 'Deen':
        setImage(pubsDeen);
        setIsOpen(!isOpen); 
        break;
      // default:
    }
  };
  
  
  

  const closePopup = () => {
    setIsOpen(false);
  };
  return (
    <section id="about">
      <BentoGrid  className="w-full lg:ml-10 grid lg:grid-cols-2 mb-[20%]    md:grid-cols-5   ">
      {gridItems.map((item) => (
  <div
  className={cn(
    "row-span-1   cursor-pointer relative overflow-hidden  rounded-3xl  bg-black-100  border-white/[0.1] group/bento hover:shadow-xl lg:w-[90%] transition duration-200 shadow-input dark:shadow-none lg:gap-x-0    md:h-[300px]     lg:h-[500px] justify-between    space-y-2",
    item.className  
  )}
  onClick={() => {
    // Check if item.id is not 8 before calling openPopup
    if (item.id !== 8) {
      openPopup(item.title, item.id);
    }
  }}
  >
  {/* add img divs */}
  <div  className={`${item.id === 6 && ""} h-full `}>
    <div className="w-full h-full absolute ">
      {item.img && (
        <img
        
          src={item.img}
          alt={item.img}
          className={cn(item.imgClassName, "object-cover object-center ")}
        />
      )}
     
    </div>
    <div
      className={`absolute right-0 -bottom-5 ${item.id === 5 && "w-full opacity-80"
        } `}
    >
  
    </div>
    {item.id === 7  && (
        <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
           <MagicButton
           position=""
           handleclick={handle}
           icon
        title="Lancez votre commande"
        />
      <TbHandClick className={`w-[50px] h-[50px] absolute left-[80%] top-[30%]  md:block lg:block`} />
        </div>
    )}
     {item.id === 8  && (
      <BackgroundGradientAnimation>
  <img
              className=" z-50  absolute top-[40%] ml-[33%]  md:w-[30px]      lg:w-[50px] w-[25px] cursor-pointer  lg:top-[30%] lg:left-[%]"
                    src="/social.png"
                    alt="My Image"
                    onClick={() => {
                        window.location.href = 'https://www.instagram.com/tab_louwat/';
                    }} 
                   />
                
                   <p className=" z-50 cursor-pointer top-[40%] left-[42%] absolute lg:top-[30%] lg:left-[40%] lg:text-[30px] font-Montserrat font-light" onClick={go}
                   >tab_louwat</p>
                    <Image
              className=" z-50 cursor-pointer  top-[55%] left-[33%] w-[25px] lg:w-[50px] absolute lg:top-[45%] lg:left-[33%]"
                    src="/whatsapp.png"
                    alt="My Image"
                    width={50}
                    height={50}
                    onClick={handleCopy}                 />
                   <p className=" cursor-pointer top-[55%] left-[42%] z-50 absolute lg:top-[45%] lg:left-[40%] lg:text-[30px] font-Montserrat font-light" 
                      onClick={handleCopy}
                   >+21377400845</p>
                          <Image
              className=" z-50 cursor-pointer  top-[70%] left-[33%] w-[25px] lg:w-[50px] absolute lg:top-[60%] lg:left-[33%]"
                    src="/face.png"
                    alt="My Image"
                    width={50}
                    height={50}
                    onClick={() => {
                             window.location.href = 'https://www.facebook.com/profile.php?id=61563005586214&locale=fr_FR';
                    }}                   />
                   <p className=" cursor-pointer top-[70%] left-[42%] z-50 absolute lg:top-[60%] lg:left-[40%] lg:text-[30px] font-Montserrat font-light" 
                   onClick={() => {
                    window.location.href = 'https://www.facebook.com/profile.php?id=61563005586214&locale=fr_FR';
           }}  
                   >tablouwat</p>
                   <a href="mailto:eldjahmanimaher@gmail.com?subject=Hello&body=Message body">
                     <Image
              className=" z-50 cursor-pointer   top-[85%] left-[33%] w-[25px] lg:w-[50px] absolute lg:top-[75%] lg:left-[33%]"
                    src="/gmail.png"
                    alt="My Image"
                    width={50}
                    height={50}
                    onClick={() => {
                             window.location.href = 'https://www.facebook.com/profile.php?id=61563005586214&locale=fr_FR';
                    }}                   />
                   <p className=" cursor-pointer top-[86%] left-[42%] text-[13px] z-50 absolute lg:top-[75%] lg:left-[40%] lg:text-[30px] font-Montserrat font-light" 
                   onClick={() => {
                    navigator.clipboard.writeText("+213774900845");
           }}  
           
                   >eldjahmanimaher@gmail.com</p>
                   </a>       {/* </a> */}
                <img alt="bis" src='/WHITE.svg'  className=' grid md:w-[200px] md:h-[200px] w-[100px] h-[100px] place-items-center absolute top-[5%] left-[5%] '/>
        <div className="absolute   z-10 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
      </BackgroundGradientAnimation>
    )}

    <div
      className={cn(
        item.titleClassName,
        "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
      )}
    >
 
      <div
        className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}
      >
         <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 1,
      }}
    >
      
       <p className=" font-Montserrat md:w-[700px] lg:text-[30px] uppercase" >{item.title}</p> 
      <div className="font-sans  font-extralight md:max-w-[300px] md:text-xs lg:text-base text-sm text-[#eaeae9] z-10">
        <div className="bg-gray-900 bg-opacity-40 text-white w-[320px] font-Montserrat font-semibold rounded-lg pl-[5px]">
          {item.description}
        </div>         
         </div>
    </motion.div>
      </div>
      
      
      {item.id === 8   && (
        <div className="mt-[200px] relative">
          
          <div
            className={`absolute -bottom-5 right-0 ${copied ? "block" : "block"
              }`}
          >

            <Lottie options={{
              loop:copied,
              autoplay:copied,
              animationData:animationData,
              rendererSettings: {
                preserveAspectRatio: "xMidYMid slice",
              },
            }} 
            height={200} width={400} />
          </div>

        
    </div>
      )}
      
        
    
    </div>
  </div>
</div>
))}
 {isOpen && (
  <div onClick={closePopup} className=" fixed inset-0 w-screen z-50 flex items-center justify-center bg-black-100 bg-opacity-50">
    <div className=" bg-gray-200 rounded-lg p-6 overflow-y-auto md:w-[90%] w-[90%] lg:w-[90%] h-[700px] flex justify-center items-center  gap-4">
=      <ParallaxScroll 
        className=" absolute md:right-[5%] right-0 object-fill  lg:left-[-8%] w-[100%]  "
        images={image}
        id={my}
        />

    </div>
  </div>
)}
      </BentoGrid>
      
    </section>
  );
};  


export default Grid;