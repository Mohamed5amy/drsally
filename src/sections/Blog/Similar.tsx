import AnimatedTitle from '@/components/AnimatedTitle'
import Blog from '@/components/ui/Blog'
import { blogs } from '@/data/blogs'
import { getTranslations } from 'next-intl/server'

function shuffleArray(array: BlogType[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

const Similar = async ({ id }: { id: number }) => {
  const t = await getTranslations()

  return (
    <div className="py-20">
      <AnimatedTitle className="text-primaryText mb-8 text-[32px] font-bold">
        {t('similar_blogs_title')}
      </AnimatedTitle>
      <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-4">
        {shuffleArray(blogs)
          .filter((item) => item.id !== id)
          .slice(0, 3)
          .map((blog: BlogType, i: number) => (
            <Blog blog={blog} i={i} key={i} />
          ))}
      </div>
    </div>
  )
}

export default Similar
