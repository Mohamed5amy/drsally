import { rightArrow } from '@/icons'
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image'
import Link from 'next/link';

const BlogRow = ({blog} : {blog : BlogType}) => {
  const t = useTranslations();
  const locale = useLocale()
  return (
    <div className='bg-textPrimary rounded-3xl h-[250px] overflow-hidden hidden md:flex items-center'>
        <Link href={"/blog/" + blog.id}>
          <div className='min-w-[400px] h-full'>
              <Image src={blog.image} alt='Blog Image' width={400} height={300} className='object-cover w-full h-full' />
          </div>
        </Link>
        {/* Content */}
        <div className='px-4 pt-2'>
            <p className='font-semibold text-xl pb-1'> {locale === "en" ? blog?.title : blog?.titleAr} </p>
            <p className='text-lightText mb-4 line-clamp-3'>{locale === "en" ? blog.paragraphs[0].description : blog.paragraphs[0].descriptionAr}</p>
            {/* Button */}
            <Link href={"/blog/" + blog.id} className='flex items-center gap-2 transition-all hover:text-secondary text-lg font-semibold'>
                {t('blog_readMore')}
                <span className={`text-secondary ${locale === "ar" ? "rotate-180" : ""}`}> {rightArrow} </span>
            </Link>
        </div>
    </div>
  )
}

export default BlogRow