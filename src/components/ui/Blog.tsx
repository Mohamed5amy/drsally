import { rightArrow } from '@/icons'
import Image from 'next/image'
import React from 'react'

const Blog = ({i} : {i : number}) => {
  return (
    <div className='rounded-3xl bg-textPrimary overflow-hidden blogShadow transition-all group hover:-translate-y-2' data-aos="fade-right" data-aos-delay={i * 200}>
        {/* Image */}
        <div className='overflow-hidden'><Image src={"https://picsum.photos/50" + i} alt='Blog Image' width={500} height={230} className='group-hover:scale-125 transition-transform' /></div>
        {/* Content */}
        <div className='p-4 pt-2'>
            <p className='font-semibold text-xl pb-1'> What others say </p>
            <p className='text-lightText line-clamp-1 mb-4'> Hear from others who have worked wi others who have worked wi </p>
            {/* Button */}
            <button className='flex items-center gap-2 transition-all hover:text-secondary hover:gap-4 text-lg font-semibold'>
                Read More
                <span className='text-secondary'> {rightArrow} </span>
            </button>
        </div>
    </div>
  )
}

export default Blog