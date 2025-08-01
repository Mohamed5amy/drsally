"use client"

import { useRouter } from '@/i18n/navigation'
import { useAppointmentStore } from '@/store/useAppointmentStore'
import React, { ReactNode } from 'react'

const Button = ({type , label , icon , disabled , onClick} : {type : "book" | "contact" | "" , label : string , icon : ReactNode , disabled? : boolean , onClick? : () => void}) => {

  const router = useRouter()
  const { setData } = useAppointmentStore();
    
  const handleClick = () => {
    if (onClick) {
      onClick()
    } else {
      if (type === "") {
        return
      }
      else if (type === "book") {
        setData({service : 0})
        router.push("/appointments?step=1")
      } else {
        router.push("/contact")
      }
    }
  }
  
  return (
    <button onClick={handleClick} className="capitalize w-full sm:w-fit md:text-lg text-thirdText bg-primary relative h-14 pr-16 rounded-full pl-6 group disabled:cursor-not-allowed disabled:opacity-60" disabled={disabled}>
      {label}
      <div className="flex h-12 w-12 transition-all group-hover:w-[calc(100%-8px)] bg-thirdText rounded-full absolute right-1 top-1 items-center justify-center gap-2 overflow-hidden text-primary">
        {icon}
        <div className="hidden group-hover:block transition-all text-nowrap"> {label} </div>
      </div>
    </button>
  )
}

export default Button