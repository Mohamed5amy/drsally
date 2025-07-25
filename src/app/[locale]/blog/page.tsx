import Articles from '@/sections/Blog/Articles'
import Header from '@/sections/Blog/Header'
import { getTranslations } from "next-intl/server"

const page = async () => {
  const t = await getTranslations()
  return (
    <div>
        <Header label={t('Blog')} />
        <Articles />
    </div>
  )
}

export default page