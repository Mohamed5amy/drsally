import AnimatedTitle from '@/components/AnimatedTitle'
import Blog from '@/components/ui/Blog'

const Blogs = () => {
  return (
    <div className='pb-20 container'>
        <AnimatedTitle className='text-primaryText mb-8 text-[32px] font-bold text-center'> Our Blog </AnimatedTitle>
        <div className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {[...Array(4)].map((_ , i) => {
                return <Blog i={i} key={i} />
            })}
        </div>
    </div>
  )
}

export default Blogs