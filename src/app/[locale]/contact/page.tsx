import Header from '@/sections/Blog/Header'
import Contact from '@/sections/Contact'
import { getTranslations } from 'next-intl/server'

const page = async () => {
  const t = await getTranslations();

  return (
    <div>
      <Header label={t('contact_title_page')} />
      <Contact />
    </div>
  )
}

export default page
