import Image from "next/image"
import Link from "next/link"
import Button from "./Button"
import { calenderIcon } from "@/icons"
import Menu from "./Menu"

const Nav = () => {

  const list = [
    {name : "Appointments" , link : "/appointments"},
    {name : "About" , link : "/about"},
    {name : "Services" , link : "/services"},
    {name : "Testimonials" , link : "/testimonials"},
    {name : "Blog" , link : "/blog"},
    {name : "Contact" , link : "/contact"},
  ]
  
  return (
    <div className="container flex items-center justify-between py-6 bg-bg">
      {/* Logo */}
      <Image src={"/logo.svg"} alt="Logo" width={290} height={56} className="max-w-[230px] sm:max-w-[290px]" />
      {/* List */}
      <div className="hidden lg:flex items-center gap-10">
        <div className="flex items-center">
          {list.map((item , i) => {
            return <Link href={item.link} key={i} className="text-lg font-semibold text-secondaryText px-2"> {item.name} </Link>
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