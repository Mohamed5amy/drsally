import Sidebar from '@/components/custom/Sidebar'
import EditProfile from '@/sections/Profile/EditProfile'


const page = () => {
    
  return (
    <div className='container'>
        <div className="flex gap-4 lg:gap-10 px flex-col md:flex-row">
            <Sidebar page={"My Profile"} />
            <div className="flex-1">
                <EditProfile />
            </div>
        </div>
    </div>
    
  )
}

export default page