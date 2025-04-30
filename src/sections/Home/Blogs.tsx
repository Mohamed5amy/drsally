import Blog from '@/components/ui/Blog'
import { rightArrow } from '@/icons'
import Image from 'next/image'
import React from 'react'

const Blogs = () => {
  return (
    <div className='pb-20 container'>
        <h3 className='text-primaryText mb-8 text-[32px] font-bold text-center'> Our Blog </h3>
        <div className='grid grid-cols-4 gap-4'>
            {[...Array(4)].map((_ , i) => {
                return <Blog i={i} key={i} />
            })}
        </div>
    </div>
  )
}

export default Blogs