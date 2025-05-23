import React, { ReactNode } from 'react'

const Button = ({label , icon} : {label : string , icon : ReactNode}) => {
  return (
    <button className="capitalize w-full sm:w-fit md:text-lg text-thirdText bg-primary relative h-14 pr-16 rounded-full pl-6 group">
          {label}
          <div className="flex h-12 w-12 transition-all group-hover:w-[calc(100%-8px)] bg-thirdText rounded-full absolute right-1 top-1 items-center justify-center gap-2 overflow-hidden text-primary">
            {icon}
            <div className="hidden group-hover:block transition-all text-nowrap"> {label} </div>
          </div>
        </button>
  )
}

export default Button