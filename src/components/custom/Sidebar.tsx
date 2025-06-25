"use client"

import Link from "next/link";
import { useState } from "react";
import user from "@/animatedIcons/user.json"
import calender from "@/animatedIcons/calender.json"
import LogoutPopup from "./LogoutPopup";
import dynamic from "next/dynamic";
import logout from "@/animatedIcons/logout.json"
const HoverLottie = dynamic(() => import('@/components/HoverLottie') , {ssr : false})

const Sidebar = ({page} : {page : string}) => {

  const [play, setPlay] = useState({
    user : false,
    calender : false,
    logout : false
  })
  
  const links = [
    {name : "My Profile" , link : "/profile" , iconName : "user" , icon : <HoverLottie play={play.user} icon={user} w={24} h={24} />},
    {name : "My Appointments" , link : "/profile/appointments" , iconName : "calender" , icon : <HoverLottie play={play.calender} icon={calender} w={24} h={24} />},
  ]

  const [active, setActive] = useState(false)
  
  return (
    <div className="flex-1 min-w-full md:min-w-[250px] max-w-full md:max-w-[250px] bg-white py-3 rounded-3xl flex flex-col gap-2 overflow-hidden h-fit">
        {links.map((item , i) => {
          return (
            <Link href={item.link} key={i} onMouseEnter={() => setPlay({...play , [item.iconName] : true})} onMouseLeave={() => setPlay({...play , [item.iconName] : false})}>
              <div className={`flex items-center gap-2 px-4 py-2 transition-colors group hover:text-primary cursor-pointer hover:bg-[rgba(41,180,115,0.08)] button ${page === item.name && "text-primary bg-[rgba(41,180,115,0.08)]"}`}>
                <span className={`text-textSecondary transition-colors group-hover:text-primary ${page === item.name && "!text-primary"}`}>
                  {item.icon}
                </span>
                {item.name}
              </div>
            </Link>
          )
        })}
        <div className={`flex items-center gap-2 px-4 py-2 transition-colors group hover:text-primary cursor-pointer hover:bg-[rgba(41,180,115,0.08)] button`} onClick={() => setActive(true)} onMouseEnter={() => setPlay({...play , logout : true})} onMouseLeave={() => setPlay({...play , logout : false})}>
          <span className={`text-textSecondary transition-colors group-hover:text-primary`}>
            <HoverLottie icon={logout} w={24} h={24} play={play.logout} />
          </span>
          Logout
        </div>
        {active && <LogoutPopup setActive={setActive} />}
      </div>
  )
}

export default Sidebar