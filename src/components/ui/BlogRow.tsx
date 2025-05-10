import { rightArrow } from '@/icons'
import Image from 'next/image'
import React from 'react'

const BlogRow = () => {
  return (
    <div className='bg-textPrimary rounded-3xl h-[250px] overflow-hidden flex items-center'>
        <div className='min-w-[400px] h-full'>
            <Image src={"https://picsum.photos/1500"} alt='Blog Image' width={400} height={300} className='object-cover w-full h-full' />
        </div>
        {/* Content */}
        <div className='px-4 pt-2'>
            <p className='font-semibold text-xl pb-1'> What others say </p>
            <p className='text-lightText mb-4'> Individual therapy is a joint process between a therapist and a person seeking therapy to achieve goals of therapy sessions like goals to inspire change or improve quality of life. Individual therapy is also called psychotherapy, psychosocial therapy, talk therapy, and counseling. </p>
            {/* Button */}
            <button className='flex items-center gap-2 transition-all hover:text-secondary hover:gap-4 text-lg font-semibold'>
                Read More
                <span className='text-secondary'> {rightArrow} </span>
            </button>
        </div>
    </div>
  )
}

export default BlogRow