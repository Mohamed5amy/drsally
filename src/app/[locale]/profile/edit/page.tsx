import Sidebar from '@/components/custom/Sidebar'
import EditProfile from '@/sections/Profile/EditProfile'
import { getTranslations } from 'next-intl/server'


const page = async () => {
    const t = await getTranslations()
  return (
    <div className='container'>
        <div className="flex gap-4 lg:gap-10 px flex-col md:flex-row">
            <Sidebar page={t("sidebar_profile")} />
            <div className="flex-1">
                <EditProfile />
            </div>
        </div>
    </div>
    
  )
}

export default page