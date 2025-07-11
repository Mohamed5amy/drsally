"use client"

import Image from "next/image"
import Link from "next/link"
import Button from "./Button"
import { homeIcon } from "@/icons"
import Menu from "./Menu"
import { usePathname } from "next/navigation"
import useAuthUser from "react-auth-kit/hooks/useAuthUser"
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated"
import { ChevronDown, LogOut, User } from "lucide-react"
import useSignOut from "react-auth-kit/hooks/useSignOut"
import { ReactNode, useState } from "react"
import { Package } from "lucide-react"

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
  const isAuth = useIsAuthenticated()
  const user = useAuthUser() as {name : string}

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
        {isAuth ? (
          <Dropdown>
            <div className="items-center gap-4 hidden md:flex">
              <div className="text-primary font-bold capitalize text-lg w-12 h-12 flex items-center justify-center rounded-full bg-secondary text-white"> {user.name.split(" ").length > 1 ? user.name.split(" ")[0][0] + user.name.split(" ")[1][0] : user.name.split(" ")[0][0]} </div>
              <div className="flex md:hidden xl:flex flex-col items-start gap-0">
                <div className="text-secondaryText font-semibold">Welcome</div>
                <div className="text-primary font-bold">{user.name.length > 12 ? user.name.split(" ")[0] : user.name}</div>
              </div>
              <ChevronDown className="w-4 h-4" />
            </div>
          </Dropdown>
        ) : (
          <Link href={"/login"} className="hidden md:block"> <Button label="Login" icon={homeIcon} /> </Link>
        )}
      </div>
      {/* Menu */}
      <Menu list={list} />
    </div>
  )
}

const Dropdown = ({children} : {children : ReactNode}) => {
  const [isOpen, setIsOpen] = useState(false);

  const logout = useSignOut()

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <div className="relative">
      {/* Dropdown Button */}
      <button onClick={toggleDropdown}>
        {children}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border">
          {/* Profile Option */}
          <Link
            onClick={() => setIsOpen(false)}
            href="/profile"
            className="flex items-center gap-3 px-4 py-2 text-sm text-secondaryText transition-all hover:bg-background cursor-pointer"
          >
            <User className="w-4 h-4" />
            Profile
          </Link>

          {/* Items Option */}
          <Link
            onClick={() => setIsOpen(false)}
            href="/profile/appointments"
            className="flex items-center gap-3 px-4 py-2 text-sm text-secondaryText transition-all hover:bg-background cursor-pointer"
          >
            <Package className="w-4 h-4" />
            My Appointments
          </Link>

          {/* Logout Option */}
          <button
            onClick={() => {setIsOpen(false) ; logout() ; window.location.reload()}}
            className="flex items-center gap-3 px-4 py-2 w-full text-sm text-red-500 transition-all hover:bg-background cursor-pointer"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      )}
    </div>
  )
}

export default Nav