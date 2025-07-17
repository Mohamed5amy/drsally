import AnimatedTitle from '@/components/AnimatedTitle'
import Blog from '@/components/ui/Blog'
import BlogRow from '@/components/ui/BlogRow'
import { blogs } from '@/data/blogs'

const Articles = () => {
  return (
    <div className='container py-14 pb-20'>
        <AnimatedTitle className="text-[28px] md:text-[32px] font-bold text-[#1C2C2D] mb-2 text-center">
        Welcome to my blog!
        </AnimatedTitle>
        <p className='text-xl text-center mb-12'>
            Here you will find advice and resources to help you make positive changes in your life.
            Whether you're struggling with anxiety, depression, or any other mental health issue, I'm here to provide you with the tools and insight needed to overcome any obstacle that life throws your way. With my experience in psychology and counselling, I'm ready to help you work towards a healthier, happier you. If you have any questions feel free to reach out – I'm always happy to help because you matter.
        </p>
        <BlogRow blog={blogs[0]} />
        <div className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-6 mt-12'>
            {blogs.slice(1).map((blog , i) => {
                return <Blog blog={blog} i={i} key={i} />
            })}
        </div>
    </div>
  )
}

export default Articles