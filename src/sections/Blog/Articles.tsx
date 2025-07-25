import AnimatedTitle from '@/components/AnimatedTitle'
import Blog from '@/components/ui/Blog'
import BlogRow from '@/components/ui/BlogRow'
import { blogs } from '@/data/blogs'
import { getTranslations } from 'next-intl/server'

const Articles = async () => {
  const t = await getTranslations()

  return (
    <div className='container py-14 pb-20'>
      <AnimatedTitle className="text-[28px] md:text-[32px] font-bold text-[#1C2C2D] mb-2 text-center">
        {t('article_title')}
      </AnimatedTitle>
      <p className='text-xl text-center mb-12'>
        {t('article_description')}
      </p>

      <BlogRow blog={blogs[0]} />
      <div className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-6 mt-12'>
        {blogs.slice(1).map((blog, i) => (
          <Blog blog={blog} i={i} key={i} />
        ))}
      </div>
    </div>
  )
}

export default Articles
