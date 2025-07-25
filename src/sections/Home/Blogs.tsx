import AnimatedTitle from '@/components/AnimatedTitle'
import Blog from '@/components/ui/Blog'
import { blogs } from '@/data/blogs'
import { useTranslations } from 'next-intl';

const Blogs = () => {
  const t = useTranslations();
  return (
    <div className='pb-20 container'>
        <AnimatedTitle className='text-primaryText mb-8 text-[32px] font-bold text-center'> {t('blogs_title')} </AnimatedTitle>
        <div className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {blogs.slice(0 , 4).map((blog , i) => {
                return <Blog blog={blog} i={i} key={i} />
            })}
        </div>
    </div>
  )
}

export default Blogs