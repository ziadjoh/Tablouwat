import Image from "next/image";
import Hero from "./compnents/Hero";
import Grid from "./compnents/Grid";
import About from "./compnents/About";
import Enga from "./compnents/Enga";


export default function Home() {
  
  return (
    
    <main className=" relative bg-[#eaeae9] flex justify-center flex-col
     items-center overflow-hidden mx-auto px-5 pb-10 sm:px-10  ">
      <div className=" max-w-7xl w-full h-full ">
        <Hero/>
        <About/>
        <img alt="bis"  src='/MOTIF.png' width={200} height={200} className=' absolute right-0 mb-[300px] mt-[-50px] lg:mt-[-250px]    '/>
        
        <Enga />
        <Grid />


      </div>
        <img alt="bis"  src='/footer.png'  className=' absolute bottom-[0%] w-[100%]'/>
    </main>
  );
}
