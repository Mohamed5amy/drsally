"use client"

import Image from "next/image"
import Link from "next/link"
import Button from "./Button"
import { calenderIcon } from "@/icons"
import Menu from "./Menu"
import { usePathname } from "next/navigation"

const Nav = () => {

  const list = [
    {name : "Appointments" , link : "/appointments"},
    {name : "About" , link : "/about"},
    {name : "Services" , link : "/services"},
    {name : "Testimonials" , link : "/testimonials"},
    {name : "Blog" , link : "/blog"},
    {name : "Contact" , link : "/contact"},
  ]

  const pathname = usePathname()
  console.log(pathname)
  
  return (
    <div className="container flex items-center justify-between py-6 bg-bg">
      {/* Logo */}
      <Link href={"/"}>
        <Image src={"/logo.svg"} alt="Logo" width={290} height={56} className="max-w-[230px] sm:max-w-[290px]" />
      </Link>
      {/* List */}
      <div className="hidden lg:flex items-center gap-10">
        <div className="flex items-center">
          {list.map((item , i) => {
            return <Link href={item.link} key={i} 
            className={`text-lg font-semibold ${pathname === item.link ? "text-primary active" : "text-secondaryText"} px-2 relative`}>
              {item.name}
              <div className={`${pathname === item.link ? "absolute" : "hidden"} left-1/2 -translate-x-1/2 -bottom-8 w-10 h-8 scale-125 z-0 rotate-[50deg]`}>
                <Image src={"/flower.svg"} alt="Flower Image" width={40} height={30} className="w-full h-full" />
              </div>
            </Link>
          })}
        </div>
        {/* Button */}
        <div className="hidden xl:block"> <Button label="Book a session" icon={calenderIcon} /> </div>
      </div>
      {/* Menu */}
      <Menu list={list} />
    </div>
  )
}

export default Nav