import React from 'react'

const NormalButton = ({label , styles} : {label : string , styles? : string}) => {
  return (
    <button className={"text-textPrimary font-semibold transition-all hover:bg-secondary hover:px-14 py-4 px-10 rounded-full bg-primary " + styles}>
        {label}
    </button>
  )
}

export default NormalButton