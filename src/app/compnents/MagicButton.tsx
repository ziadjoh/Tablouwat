import React from 'react'

function MagicButton({ title , position, icon, handleclick}:
   { title:string, position: string , icon:React.ReactNode, handleclick?: ()=> void}
) {
  const handle =   async () => {
    window.location.href = 'https://ig.me/m/tab_louwat';
  };
  return (
<button className="relative inline-flex w-full h-full overflow-hidden rounded-lg p-[1px] focus:outline-none " onClick={handle}>
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#d7a052_0%,#d7a052_50%,#ffffff_100%)]" />
  <span className="inline-flex h-full w-full cursor-pointer   text-[28px] lg:text-[38px] items-center justify-center rounded-lg bg-black-100 gap-2 px-7 py-2  font-medium text-white backdrop-blur-3xl">
  {position === "left" && icon}
        {title}
 {position === "right" && icon}
  </span>
</button>  )
}

export default MagicButton