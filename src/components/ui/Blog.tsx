import { rightArrow } from '@/icons'
import Image from 'next/image'
import Link from 'next/link';

const Blog = ({i , blog} : {i : number , blog : BlogType}) => {
  return (
    <div className='rounded-3xl bg-textPrimary overflow-hidden blogShadow transition-all group hover:-translate-y-2' data-aos="fade-right" data-aos-delay={i * 200}>
        {/* Image */}
        <Link href={"/blog/" + blog.id}>
          <div className='overflow-hidden h-[230px]'><Image src={blog?.image} alt='Blog Image' width={500} height={230} className='group-hover:scale-125 transition-transform duration-1000 h-full w-full object-cover' /></div>
        </Link>
        {/* Content */}
        <div className='p-4 pt-4'>
            <p className='font-semibold text-xl pb-1 line-clamp-2 min-h-[60px]'> {blog?.title} </p>
            <p className='text-lightText line-clamp-2 mb-4'> {blog.paragraphs[0].description} </p>
            {/* Button */}
            <Link href={"/blog/" + blog.id} className='flex items-center gap-2 transition-all hover:text-secondary text-lg font-semibold'>
                Read More
                <span className='text-secondary'> {rightArrow} </span>
            </Link>
        </div>
    </div>
  )
}

export default Blog