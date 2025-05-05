"use client"

import Link from "next/link"
import MenuToggle from "./MenuToggle"
import { useState } from "react"

const Menu = ({list} : {list : {name : string , link : string}[]}) => {
  const date = new Date().getFullYear()
  const [active, setActive] = useState(false)
  return (
    <>
        <div onClick={() => setActive(prev => !prev)} className="flex lg:hidden"> <MenuToggle /> </div>
        {active && <div className="fixed inset-0 bg-primary z-10 flex flex-col text-textPrimary text-3xl font-bold gap-8 items-center justify-center" data-aos="fade-in">
            {/* items */}
            {list.map((item , i) => {
                return (
                    <Link href={item.link} data-aos="fade-up" key={i} data-aos-delay={1000 + (i * 200)} onClick={() => setActive(false)}> <p className="transition-colors hover:text-secondary"> {item.name} </p> </Link>
                )
            })}
            {/* Copyrights */}
            <p className="absolute text-[16px] font-normal text-textPlaceholder bottom-10 text-center" data-aos="fade-in" data-aos-delay={1000}>  © {date} All Rights Reserved | Powered by <strong><a href="https://www.mssmsolutions.com/" rel="noreferrer" target="_blank" className="transition-colors hover:text-secondary">MSSM</a></strong> Solutions </p>
        </div>}
    </>
  )
}

export default Menu