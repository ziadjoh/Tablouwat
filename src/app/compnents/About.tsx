import React from 'react'
import Image from 'next/image'
function About() {
  return (
    <div className=' grid  mt-[0%]  grid-cols-1 grid-rows-2 max-h-[900px] sm:grid-cols-2 mb-[200px] gap-x-24 md:gap-x-28 md:gap-y-8 sm:grid-rows-2 '>
        <img alt="bis" src='/logo.svg' width={200} height={200} className=' ml-[24%] grid place-items-center mt-[0%] sm:mt-[3%] sm:ml-[-15%]  md:mt-[-40px] col-span-1 row-span-1  sm:row-span-2 md:ml-[-8%] '/>
        <h1 className=' text-purple font-black col-span-1 uppercase font-Montserrat flex justify-center mt-[-290px] sm:ml-[-80%] max-h-[80px]   text-[30px] md:w-[180%] sm:mt-[-30px] md:ml-[-80%] lg:ml-[-160%] row-span-1'>à proprs de nous : </h1>
        <p className=' row-span-1 lg:text-[16px] max-h-28 font-Montserrat text-black-100 sm:ml-[-62%] mt-[-230px]  sm:w-[160%] lg:mt-[-15%] ma  md:ml-[-80%] lg:ml-[-80%] md:w-[180%]   lg:w-[200%] sm:mt-[-40%] md:mt-[-25%] col-span-1'>TablouwaT, ou tableaux dans la langue française. Spécialisés dans la création de 
            tableaux décoratifs en forex, un matériau léger, rigide et résiste à l’eau. Nous
            allions qualité et esthétisme pour offrir des œuvres qui embellissent vos espaces. 
            Notre équipe de designer travaille avec passion afin de proposer une bibliothèque 
            riche en modèles variés, inspirés de multiples styles et tendances artistiques. Que 
            vous cherchiez des œuvres abstraites, des paysages, des illustrations manga, ou 
            des portraits, nous avons de quoi satisfaire tous les goûts et décors.
           <br /> <b>TablouwaT s'engage à offrir : </b><br />
                    - Qualité Supérieure . <br />
                    - Service Client Personnalisé . <br />
                    - Livraison Rapide et Sécurisée . <br />
                    - Engagement Écologique .</p>
            
    </div>  
  )
}

export default About