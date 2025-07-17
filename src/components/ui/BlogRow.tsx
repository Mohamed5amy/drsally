import { rightArrow } from '@/icons'
import Image from 'next/image'
import Link from 'next/link';

const BlogRow = ({blog} : {blog : BlogType}) => {
  return (
    <div className='bg-textPrimary rounded-3xl h-[250px] overflow-hidden hidden md:flex items-center'>
        <Link href={"/blog/" + blog.id}>
          <div className='min-w-[400px] h-full'>
              <Image src={blog.image} alt='Blog Image' width={400} height={300} className='object-cover w-full h-full' />
          </div>
        </Link>
        {/* Content */}
        <div className='px-4 pt-2'>
            <p className='font-semibold text-xl pb-1'> {blog.title} </p>
            <p className='text-lightText mb-4 line-clamp-3'> {blog.paragraphs[0]?.description} </p>
            {/* Button */}
            <Link href={"/blog/" + blog.id} className='flex items-center gap-2 transition-all hover:text-secondary text-lg font-semibold'>
                Read More
                <span className='text-secondary'> {rightArrow} </span>
            </Link>
        </div>
    </div>
  )
}

export default BlogRow